// app/api/upload/route.ts
import { auth } from '@clerk/nextjs/server';
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { db } from '~/server/db';
import { images } from '~/server/db/schema';

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    const body = await request.arrayBuffer();
    
    if (!filename || !body) {
      return NextResponse.json({ error: 'Filename and body are required' }, { status: 400 });
    }

    const blobs = [];
    for (let i = 0; i < body.byteLength; i += 4 * 1024 * 1024) { // 4MB chunks
      const chunk = body.slice(i, i + 4 * 1024 * 1024);
      const blob = await put(`${filename}-part${i}`, chunk, {
        access: 'public',
        addRandomSuffix: true,
      });
      
      await db.insert(images).values({
        url: blob.url,
        name: filename,
        userId,
      });
      
      blobs.push(blob);
    }

    return NextResponse.json({ success: true, files: blobs });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}