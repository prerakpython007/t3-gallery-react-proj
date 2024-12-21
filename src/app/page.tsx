  import { index } from "drizzle-orm/mysql-core";
  import Link from "next/link";
  import { db } from "~/server/db";

  export const dynamic = "force-dynamic"

 

  export default async function HomePage() {

    const images = await db.query.images.findMany({
      orderBy:(model, {desc}) => desc(model.id),
    })
    

    const duplicatedImages = [
      ...images.map(img => ({ ...img, id: img.id })),
      ...images.map(img => ({ ...img, id: img.id + images.length }))
    ];
    return (
      <main className="">
        <div className="flex flex-wrap gap-4">
          
          {
        duplicatedImages.map((image , index) => (
          <div key={image.id + "-"  + index} className="w-48 p-3 flex flex-col">
              <img src={image.url} alt="" />
              <div>{image.name}</div>
          </div>
        ))
      }
        </div>
      </main>
    );
  }