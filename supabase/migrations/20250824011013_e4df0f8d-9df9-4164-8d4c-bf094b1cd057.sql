-- Drop the existing restrictive policies
DROP POLICY IF EXISTS "Allow public read access to videos" ON storage.objects;
DROP POLICY IF EXISTS "Allow signed URL generation for videos" ON storage.objects;

-- Create new policies that allow public access without authentication
CREATE POLICY "Public can view videos" 
ON storage.objects 
FOR SELECT 
TO public
USING (bucket_id = 'videos');

-- Allow anyone to create signed URLs for videos (needed for video loading)
CREATE POLICY "Public can generate signed URLs for videos" 
ON storage.objects 
FOR SELECT 
TO anon
USING (bucket_id = 'videos');