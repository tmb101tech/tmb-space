-- Add company and role columns to reviews table
ALTER TABLE public.reviews
ADD COLUMN company TEXT,
ADD COLUMN role TEXT;