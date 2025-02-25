"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getStrapiData } from "@/lib/services/strapiApiData";

export default function Home() {
  const [data, setData] = useState<{
    title: string;
    description: string;
    imageUrl: string | null;
    backgroundImageUrl: string | null;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const strapiData = await getStrapiData("/api/home-page");
      if (strapiData) {
        const { title, description, profileImage, backgroundImage } = strapiData;
        
        // Hent bilde-URL fra original formatet
        const imageUrl = profileImage?.url
          ? process.env.NEXT_PUBLIC_STRAPI_API_URL + profileImage.url
          : null;

        const backgroundImageUrl = backgroundImage?.url
          ? process.env.NEXT_PUBLIC_STRAPI_API_URL + backgroundImage.url
          : null;

        setData({ title, description, imageUrl, backgroundImageUrl });
      }
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <main>
      {/* Bakgrunnsbilde */}
      {data.backgroundImageUrl && (
        <div className="absolute top-0 left-0 w-full h-[500px]">
          <Image
            src={data.backgroundImageUrl}
            alt="Bakgrunnsbilde"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      )}

     <div className="flex items-center justify-start gap-5 relative m-11">
      {/* Profilbilde */}
      {data.imageUrl && (
        <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-lg z-10">
          <Image
            src={data.imageUrl}
            alt="Profilbilde"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}

      {/* Innhold */}
      <div className="bg-green-300 bg-opacity-50 p-10 rounded-3xl shadow-lg backdrop-blur-md z-10">
        <h1 className="text-5xl font-bold text-foreground">{data.title}</h1>
        <p className="text-xl mt-4 text-foreground">{data.description}</p>
      </div>
     </div>
    </main>
  );
}







