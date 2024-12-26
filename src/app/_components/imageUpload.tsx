// _components/ImageUpload.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';

export function ImageUpload() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;
    setLoading(true);
    
    try {
      const files = Array.from(e.target.files);
      const uploadPromises = files.map(async (file) => {
        const response = await fetch(`/api/upload?filename=${file.name}`, {
          method: 'POST',
          body: file,
        });
        
        if (!response.ok) throw new Error('Upload failed');
        return response.json();
      });
      
      const results = await Promise.all(uploadPromises);
      console.log('Upload successful:', results);
      router.refresh();
      router.push(''); // This f
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex flex-row-reverse'>
      <label className="cursor-pointer flex items-center gap-2  text-[#131010] hover:bg-[#AF47D2] hover:text-white p-2 rounded-full transition-colors duration-300">
        <Upload className='text-[#dde1fd]' size={30} />
        
        <input
          type="file"
          onChange={handleUpload}
          disabled={loading}
          accept="image/*"
          multiple
          className="hidden"
        />
      </label>
      {loading && <span className="text-sm mt-2 mr-4">Uploading...</span>}
    </div>
  );
}


// 