// _components/ImageUpload.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      <input
        type="file"
        onChange={handleUpload}
        disabled={loading}
        accept="image/*"
        multiple
        className="block w-full  text-sm file:duration-300  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#dde1fd] file:text-[#131010]  file:hover:text-white file:cursor-pointer hover:file:bg-[#AF47D2]"
      />
      {loading && <span className="text-sm mt-2 mr-4">Uploading...</span>}
    </div>
  );
}


// 