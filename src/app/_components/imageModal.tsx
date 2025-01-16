'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white md:max-w-[80vw] lg:max-w-[1200px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
        >
          <X size={24} />
        </button>
        
        <div className="relative h-[80vh]">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold">{altText}</h2>
        </div>
      </div>
    </div>
  );
}