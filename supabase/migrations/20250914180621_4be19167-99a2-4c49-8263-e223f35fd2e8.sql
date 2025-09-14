-- Drop the insecure policy that allows everyone to view contacts
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;

-- Create an admin users table for proper authentication
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create a secure function to check if current user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    -- Check if the current user's email exists in admin_users table
    -- This assumes you'll authenticate admins through the auth.users table
    -- and their email will match an entry in admin_users
    RETURN EXISTS (
        SELECT 1 
        FROM public.admin_users 
        WHERE email = auth.jwt() ->> 'email'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create a new secure policy for admin access to contacts
CREATE POLICY "Only authenticated admins can view contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Create policies for admin_users table (only admins can manage admins)
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can insert admin users" 
ON public.admin_users 
FOR INSERT 
TO authenticated
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update admin users" 
ON public.admin_users 
FOR UPDATE 
TO authenticated
USING (public.is_admin());

-- Insert a default admin user (you should change this email and hash)
-- This is a placeholder - in production, you'd create proper admin accounts
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('admin@vibrantcapital.com', 'PLACEHOLDER_HASH_TO_BE_REPLACED')
ON CONFLICT (email) DO NOTHING;