-- Create RLS policies for the videos bucket to allow public read access
CREATE POLICY "Allow public read access to videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'videos');

-- Create policy to allow signed URL generation for videos
CREATE POLICY "Allow signed URL generation for videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'videos');