'use client'
import { FacebookIcon, InstagramIcon } from "@/assets";
import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link target="_blank" href="https://www.facebook.com/roee_h1/" aria-label="Facebook"  prefetch={false}>
            <Image src={FacebookIcon} className="transition hover:text-primary" alt="Facebook" />
          </Link>
          <Link target="_blank" href="https://instagram.com/roee_h1" aria-label="Instagram"  prefetch={false}>
            <Image src={InstagramIcon} className="transition hover:text-primary" alt="Instagram" />
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/accessability"
            className="hover:text-primary transition-colors"
            prefetch={false}
          >
            נגישות
          </Link>
          <span>&copy; פותח על ידי רואי חיילי</span>
        </div>
      </div>
    </footer>
  );
}
