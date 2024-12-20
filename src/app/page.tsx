import { unstable_noStore as noStore } from 'next/cache';
import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";

// Opt out of all caching
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const mockUrls = [
  "https://thumbs.dreamstime.com/b/chain-links-shown-sky-blue-background-made-up-many-small-frozen-time-concept-mystery-wonder-324071465.jpg",
  "https://thumbs.dreamstime.com/b/swilcan-bridge-swilken-famous-small-stone-spanning-burn-st-andrews-links-golf-course-scotland-united-kingdom-216727869.jpg",
  "https://thumbs.dreamstime.com/b/chain-links-shown-blue-orange-color-scheme-made-up-many-small-connected-to-each-other-pattern-323799637.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtET81cbaBplH2R8Iox6Pcd7VqbPUJJTJGw&s",
]

const mockImages = mockUrls.map((url , index) => ({
  id : index + 1,
  url,
}))

async function getData() {
  noStore();
  return await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.id)]
  });
}

export default async function HomePage() {
  noStore();
  const posts = await getData();
  
  // Add a timestamp to verify fresh data
  const timestamp = new Date().toISOString();
  console.log("Data fetched at:", timestamp, posts);

  const duplicatedImages = [
    ...mockImages.map(img => ({ ...img, id: img.id })),
    ...mockImages.map(img => ({ ...img, id: img.id + mockImages.length }))
  ];
  
  return (
    <main className="">
      {/* Add timestamp to visually verify refresh */}
      <div className="text-sm text-gray-500 mb-4">
        Last fetched: {timestamp}
      </div>
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=> (
          <div key={post.id} className="p-2 border rounded">
            {post.name} - ID: {post.id}
          </div>
        ))}
        {duplicatedImages.map((image , index) => (
          <div key={image.id + "-"  + index} className="w-48 p-3">
              <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}