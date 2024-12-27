"use client";
import { FacebookIcon, InstagramIcon } from "@/assets";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/groups/2212613175694607/user/100075770188018/"
            aria-label="דף פייסבוק של דור טאטוס"
            prefetch={false}
          >
            <FaFacebook className="w-6 h-6 cursor-pointer transition hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ink.mind_tattoo/"
            aria-label="דף אינסטגרם של דור טאטוס"
            prefetch={false}
          >
            <FaInstagram className="w-6 h-6 cursor-pointer transition hover:text-primary" />
          </Link>
          <span>&copy; RH Webshop</span>
        </div>
        <p aria-label="כתובת העסק - שוהם מרקט דקל 30, Shoham" className="text-muted-foreground text-sm">שוהם מרקט דקל 30, Shoham</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/accessability"
            className="underline md:no-underline hover:text-primary transition-colors"
            prefetch={false}
            aria-label="קישור להצהרת נגישות"
          >
            הצהרת נגישות
          </Link>
          <Link
            href="/privacy"
            className="underline md:no-underline hover:text-primary transition-colors"
            prefetch={false}
            aria-label="קישור למדיניות פרטיות"
          >
            פרטיות
          </Link>
        </div>
      </div>
    </footer>
  );
}
