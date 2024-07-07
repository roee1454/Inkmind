"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, Home } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
} from "../drawer";
import { Button } from "../button";
import { useState } from "react";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseOnRedirect = () => {
    setIsDrawerOpen(false);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex flex-row justify-between items-center px-6 md:px-20 py-6">
          <Link href="/" className="text-3xl font-bold cursor-pointer">
            לוגו
          </Link>
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
              >
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
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
                  title="אודות"
                  icon={<User />}
                  href="/about"
                  handleCloseOnRedirect={handleCloseOnRedirect}
                />
                <NavDrawerItem
                  title="אלבום"
                  icon={<User />}
                  href="/album"
                  handleCloseOnRedirect={handleCloseOnRedirect}
                />
                <NavDrawerItem
                  title="יצירת קשר"
                  icon={<User />}
                  href="/contact"
                  handleCloseOnRedirect={handleCloseOnRedirect}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center px-4 md:px-20 py-6">
        <Link href="/" className="font-bold text-5xl cursor-pointer">
          לוגו
        </Link>
        <div className="flex flex-row justify-center items-center space-x-6 px-6 py-4">
          <NavItem title="אודות" href="/about" />
          <NavItem title="אלבום" href="/album" />
          <NavItem title="יצירת קשר" href="/contact" />
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
      className="text-xl font-bold border-none px-6 py-2 rounded-lg transition hover:bg-gray-200"
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
      className="p-2.5 rounded-full bg-transparent transition hover:bg-gray-200"
    >
      <Image src={icon} alt="logo" />
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
      className="w-full flex flex-row justify-between items-center px-12 py-2 rounded-sm bg-primary-foreground shadow-sm border-[1px] border-primary"
    >
      <div className="text-lg font-semibold">{title}</div>
      {icon}
    </Link>
  );
}
