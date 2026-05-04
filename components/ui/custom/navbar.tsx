"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import NewLogo from '@/assets/logo.jpeg'
import { FaImages } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isAlbumPage = pathname === "/tattoos-album";

  return (
    <div className="fixed top-0 left-0 w-full z-[100] py-6 pointer-events-none bg-black/40 backdrop-blur-xl border-b border-primary/20">
      {/* Decorative Glow - Symmetric to Footer */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_hsl(var(--primary))]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between pointer-events-auto">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="group relative flex items-center gap-4"
          aria-label="חזרה לדף הבית"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <Image
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-primary/40 group-hover:border-primary transition-colors"
              src={NewLogo}
              priority
              alt="Inkmind Logo"
            />
          </div>
          <span className="hidden md:block font-karantina text-4xl font-bold tracking-widest text-glow text-white">
            INKMIND
          </span>
        </Link>

        {/* Action Button Section */}
        <div className="flex items-center">
          <Link href={isAlbumPage ? "/" : "/tattoos-album"}>
            <Button
              variant="outline"
              className={`
                font-karantina text-2xl md:text-3xl p-3 h-auto rounded-2xl border-2 transition-all duration-500
                ${isAlbumPage 
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(var(--primary),0.4)]" 
                  : "bg-black/40 text-white border-primary/40 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] backdrop-blur-md"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <FaImages className="w-6 h-6" />
                <span>{isAlbumPage ? "חזרה לבית" : "גלריית קעקועים"}</span>
              </div>
            </Button>
          </Link>
        </div>

      </div>

      {/* Aesthetic Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </div>
  );
}
