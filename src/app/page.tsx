import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";

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

export default function HomePage() {

  const duplicatedImages = [
    ...mockImages.map(img => ({ ...img, id: img.id })),
    ...mockImages.map(img => ({ ...img, id: img.id + mockImages.length }))
  ];
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
      duplicatedImages.map((image) => (
        <div key={image.id} className="w-48 p-3">
            <img src={image.url} alt="" />
        </div>
      ))
    }
      </div>
    </main>
  );
}
