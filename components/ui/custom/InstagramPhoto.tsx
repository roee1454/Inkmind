'use client';

import { InstagramMedia } from "@/types";
import { AspectRatio } from "../aspect-ratio";
import Image from "next/image";

export default function InstagramImage({ caption, id, media_type, media_url, permalink, timestamp }: InstagramMedia) {
    return <AspectRatio ratio={16 / 9} className="w-96 h-96 rounded-md shadow-md cursor-pointer transition hover:opacity-85 border-2 border-primary">
        <Image className="w-full h-full" src={media_url!} alt={`${media_type} - ${caption}`} />
    </AspectRatio>
}