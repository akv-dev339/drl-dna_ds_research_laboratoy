import { getGallery } from "@/lib/api";

export default async function GalleryPage() {

  const images = await getGallery();

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">

      <h1 className="text-4xl text-cyan-400 mb-10">
        Gallery
      </h1>

      <div className="columns-2 md:columns-4 gap-4">

        {images.map((img: any) => (
          <img
            key={img.id}
            src={img.image_url}
            className="mb-4 rounded-xl hover:scale-105 transition duration-300"
          />
        ))}

      </div>

    </div>
  );
}