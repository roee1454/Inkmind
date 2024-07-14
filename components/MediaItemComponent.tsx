// components/MediaItemComponent.tsx
import React from "react";
import { MediaItem } from "@/lib/fetchInstagramData";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";

interface MediaItemProps {
  item: MediaItem;
}

const MediaItemComponent: React.FC<MediaItemProps> = ({ item }) => {
  return (
    <AspectRatio
      ratio={12 / 14}
      className="w-full h-full rounded-lg shadow-xl transition hover:opacity-85 border-4 border-primary bg-white dark:bg-black"
    >
      {item.media_type === "IMAGE" && (
        <Link target="_blank" href={item.permalink!}>
          <img
            src={item.media_url}
            alt={item.caption || "תמונה מהאינסטגרם"}
            className="w-full h-full"
          />
        </Link>
      )}
      {item.media_type === "VIDEO" && (
        <video controls className="w-full h-full">
          <source
            src={item.media_url}
            type="video/mp4"
            aria-label={item.caption || "סרטון מהאינסטגרם"}
            className="w-full h-full"
          />
        </video>
      )}
      {item.media_type === "CAROUSEL_ALBUM" && item.children && (
        <img
          src={item.children.data[0].media_url}
          alt={item.children.data[0].caption || "תמונה מהאינסטגרם"}
          className="w-full h-full"
        />
      )}
    </AspectRatio>
  );
};

export default MediaItemComponent;
