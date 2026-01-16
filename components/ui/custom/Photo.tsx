import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../aspect-ratio";

export default function Photo({ image, media_url }: any) {
  return (
    <Link className="w-full h-full relative" target="_blank" href={media_url} aria-label="קישור לתמונה מהאינסטגרם">
      <AspectRatio
        ratio={1 / 1}
        className="w-full h-full rounded-lg shadow-xl transition hover:opacity-85 border-4 border-primary"
      >
        <Image src={image} alt="תמונה מהאינסטגרם" priority className="w-full h-full object-cover" />
      </AspectRatio>
    </Link>
  );
}
