-- Add new fields to contacts table to match the updated form
ALTER TABLE public.contacts 
ADD COLUMN phone text,
ADD COLUMN company_size text,
ADD COLUMN industry text,
ADD COLUMN your_interest text;

-- Update existing role column if it exists, or add it if it doesn't
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contacts' AND column_name='role') THEN
        ALTER TABLE public.contacts ADD COLUMN role text;
    END IF;
END $$;