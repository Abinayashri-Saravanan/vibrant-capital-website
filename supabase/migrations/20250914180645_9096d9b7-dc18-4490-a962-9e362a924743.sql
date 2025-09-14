-- Fix the security warning by updating the is_admin function with SET search_path
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
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;