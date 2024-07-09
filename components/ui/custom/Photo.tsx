import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../aspect-ratio";

export default function Photo({ image, media_url }: any) {
  return (
    <Link className="w-full h-full" target="_blank" href={media_url}>
      <AspectRatio
        ratio={12 / 14}
        className="w-full h-full rounded-lg shadow-md transition hover:opacity-85 border-4 border-primary"
      >
        <Image src={image} alt={media_url} priority className="w-full h-full" />
      </AspectRatio>
    </Link>
  );
}
