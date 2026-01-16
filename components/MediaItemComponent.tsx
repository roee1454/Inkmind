// components/MediaItemComponent.tsx
import React from "react";
import { MediaItem } from "@/lib/fetchInstagramData";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

interface MediaItemProps {
  item: MediaItem;
}

const MediaItemComponent: React.FC<MediaItemProps> = ({ item }) => {
  console.log(item.media_url)
  return (
    <AspectRatio
      ratio={12 / 14}
      className="w-full h-full rounded-lg shadow-xl transition hover:opacity-85 border-4 border-primary bg-white dark:bg-black"
    >
      {item.media_type === "IMAGE" && (
        <Link target="_blank" href={item.permalink!}>
          <Image
            src={item.media_url}
            alt={"תמונה מהאינסטגרם - לינק לפוסט חיצוני באינסטגרם"}
            className="w-full h-full object-cover"
            width={300}
            height={350}
          />
        </Link>
      )}
      {item.media_type === "VIDEO" && (
        <video controls className="w-full h-full" aria-label={item.caption || "סרטון מהאינסטגרם"}>
          <source
            src={item.media_url}
            type="video/mp4"
            className="w-full h-full"
          />
        </video>
      )}
      {item.media_type === "CAROUSEL_ALBUM" && item.children && (
        <Link target="_blank" href={item.permalink!}>
          <Image
            src={item.media_url}
            alt={"תמונה מהאינסטגרם - לינק לפוסט חיצוני באינסטגרם"}
            className="w-full h-full object-cover"
            width={300}
            height={350}
          />
        </Link>
      )}
    </AspectRatio>
  );
};

export default MediaItemComponent;
