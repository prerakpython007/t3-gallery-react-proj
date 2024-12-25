// app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { db } from '~/server/db';
import { images } from '~/server/db/schema';

export async function POST(request: Request) {
 try {
   const { searchParams } = new URL(request.url);
   const filename = searchParams.get('filename');
   const body = await request.arrayBuffer();
   
   if (!filename || !body) {
     return NextResponse.json({ error: 'Filename and body are required' }, { status: 400 });
   }

   const blob = await put(filename, body, {
     access: 'public',
     addRandomSuffix: true,
   });

   await db.insert(images).values({
     url: blob.url,
     name: filename
   });

   return NextResponse.json(blob);
 } catch (error) {
   console.error('Upload error:', error);
   return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
 }
}