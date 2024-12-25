// _components/ImageUpload.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function ImageUpload() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    const file = e.target.files[0];
    
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });
      
      if (!response.ok) throw new Error('Upload failed');
      const blob = await response.json();
      console.log('Upload successful:', blob.url);
      router.refresh();
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4">
      <input
        type="file"
        onChange={handleUpload}
        disabled={loading}
        accept="image/*"
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
    </div>
  );
}