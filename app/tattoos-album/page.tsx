"use client";
import { useInfiniteQuery } from "react-query";
import { fetchInstagramData, MediaItem } from "@/lib/fetchInstagramData";
import MediaItemComponent from "@/components/MediaItemComponent";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const fetchInstagramDataWithCursor = async ({ pageParam = null }: { pageParam?: string | null }) => {
  const url = `/api/getToken?limit=12${pageParam ? `&after=${pageParam}` : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram data');
  }
  return response.json();
};

export default function GalleryPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery("instagramMedia", fetchInstagramDataWithCursor, {
      getNextPageParam: (lastPage) => lastPage.paging?.cursors?.after || null,
      retry: 1
    });

  const items = data?.pages.flatMap((page) => page.data).filter((item: MediaItem) => item.media_type !== "VIDEO") || [];

  return (
    <div className="min-h-screen w-full px-6 md:px-20 py-6 font-karantina">
      <motion.div
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col justify-center items-center space-y-2 text-center pb-8"
      >
        <span aria-label="אלבום הסטודיו" className="text-primary text-4xl font-bold md:text-4xl">
          אלבום הסטודיו
        </span>
        <h1 aria-label="גלררית העבודות שלנו" className="pb-8 text-4xl md:text-6xl font-bold decoration-wavy decoration-primary underline underline-offset-8">
          גלריית העבודות שלנו
        </h1>
      </motion.div>
      {isLoading ? (
        <motion.div
          transition={{ ease: "easeInOut", duration: 0.6 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          aria-label="מסך טעינה לאלבום - אלבום טוען"
          className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* Render loading skeletons */}
          {Array.from({ length: 12 }).map((_, index) => (
            <AspectRatio
              key={index}
              ratio={12 / 14}
              className="w-full h-full rounded-lg shadow-xl"
            >
              <Skeleton className="w-full h-full rounded" />
            </AspectRatio>
          ))}
        </motion.div>
      ) : isError ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center space-y-10 py-12 text-center"
        >
          <div className="space-y-4">
            <p className="text-4xl md:text-6xl font-bold">
              מצטערים, לא הצלחנו לטעון את התמונות כרגע.
            </p>
            <p className="text-2xl md:text-4xl">
              אתם מוזמנים להיכנס לעמודי האינסטגרם והפייסבוק שלנו ולהתרשם שם!
            </p>
          </div>
          <div className="flex flex-row sm:flex-row gap-8">
            <Link
              target="_blank"
              href="https://www.instagram.com/ink.mind_tattoo/"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "text-5xl md:text-6xl gap-4 h-12 md:h-24 px-4 md:px-8"
              })}
            >
              <FaInstagram className="w-8 h-8 md:w-12 md:h-12" /> אינסטגרם
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/groups/2212613175694607/user/100075770188018/"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "text-5xl md:text-6xl gap-4 h-12 md:h-24 px-4 md:px-8"
              })}
            >
              <FaFacebook className="w-8 h-8 md:w-12 md:h-12" /> פייסבוק
            </Link>
          </div>
        </motion.div>
      ) : (
        <div aria-label="רשימת תמונות" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item: MediaItem) => (
            <MediaItemComponent key={item.id} item={item} />
          ))}
        </div>
      )}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          aria-label="לחץ על מנת לטעון עוד פוסטים"
          className={`flex justify-center items-center mt-6 mx-auto px-4 py-2 text-5xl bg-primary text-white rounded ${isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "טוען..." : "טען עוד"}
        </button>
      )}
    </div>
  );
}
