import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InstagramMedia {
  id?: string;
  caption?: string;
  media_url?: StaticImport,
  timestamp?: string,
  media_type?: string,
  permalink?: string,
}
