"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, Home, GalleryHorizontal } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
} from "../drawer";
import { Button } from "../button";
import { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import Logo from "../../../public/Logo.png";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseOnRedirect = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full z-50 font-karantina">
      <div className="flex flex-row justify-between items-center px-6 md:px-20 py-6">
        <Link
          aria-label="דף בית"
          href="/"
          className="cursor-pointer rounded-full"
        >
          <Image
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full px-0"
            src={Logo}
            alt="לוגו עסק"
          />
        </Link>
        {/* Mobile Menu */}
        <div className="lg:hidden flex flex-row justify-center items-center">
          <ModeToggle />
          <Drawer
            disablePreventScroll={true}
            fixed
            preventScrollRestoration
            open={isDrawerOpen}
            onOpenChange={(open) => setIsDrawerOpen(open)}
          >
            <DrawerTrigger asChild>
              <Button
                variant={"outline"}
                className="p-2 rounded-full border-none bg-transparent"
                aria-label="פתח תפריט"
              >
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="font-bold font-karantina">
              <DrawerHeader>
                <DrawerTitle>תפריט</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col justify-center items-center p-6 space-y-4">
                <NavDrawerItem
                  title="מסך ראשי"
                  icon={<Home />}
                  href="/"
                  handleCloseOnRedirect={handleCloseOnRedirect}
                />
                <NavDrawerItem
                  title="אלבום הסטודיו"
                  icon={<GalleryHorizontal />}
                  href="/tattoos-album"
                  handleCloseOnRedirect={handleCloseOnRedirect}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row justify-center items-center space-x-6 px-6 py-4">
          <NavItem title="אלבום הסטודיו" href="/tattoos-album" />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  title?: string;
  href?: string;
}

interface NavDrawerItemProps extends NavItemProps {
  icon?: any;
  handleCloseOnRedirect: () => void;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <Link
      href={href || "/"}
      className="text-3xl font-bold border-none px-6 py-2 rounded-lg transition hover:text-white hover:bg-primary"
      aria-label={title}
    >
      {title || "כותרת"}
    </Link>
  );
}

interface NavIconProps {
  href: string;
  icon: string;
}

function NavIcon({ href, icon }: NavIconProps) {
  return (
    <Link
      href={href}
      className="p-2.5 rounded-full bg-transparent transition dark:hover:bg-primary"
      aria-label="קישור לאייקון"
    >
      <Image src={icon} alt="אייקון" />
    </Link>
  );
}

function NavDrawerItem({
  title,
  href,
  icon,
  handleCloseOnRedirect,
}: NavDrawerItemProps) {
  return (
    <Link
      onClick={handleCloseOnRedirect}
      href={href || "/"}
      className="w-full flex flex-row justify-between items-center px-6 py-2 rounded-lg shadow-lg border-4 border-primary"
      aria-label={title}
    >
      <div className="text-lg font-semibold">{title}</div>
      {icon}
    </Link>
  );
}
