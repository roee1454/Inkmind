"use client";
import { FacebookIcon, InstagramIcon } from "@/assets";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/dor_tattoos/"
            aria-label="Facebook"
            prefetch={false}
          >
            <FaFacebook className="w-6 h-6 cursor-pointer transition hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href="https://instagram.com/dor_tattoos"
            aria-label="Instagram"
            prefetch={false}
          >
            <FaInstagram className="w-6 h-6 cursor-pointer transition hover:text-primary" />
          </Link>
          <span>&copy; Ink Mind</span>
        </div>
        <div className="text-muted-foreground text-sm">שוהם מרקט דקל 30, Shoham</div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/accessability"
            className="underline md:no-underline hover:text-primary transition-colors"
            prefetch={false}
          >
            הצהרת נגישות
          </Link>
          <Link
            href="/privacy"
            className="underline md:no-underline hover:text-primary transition-colors"
            prefetch={false}
          >
            פרטיות
          </Link>
          <Link
            href="/terms-conditions"
            className="underline md:no-underline hover:text-primary transition-colors"
            prefetch={false}
          >
            תקנון האתר
          </Link>
        </div>
      </div>
    </footer>
  );
}
