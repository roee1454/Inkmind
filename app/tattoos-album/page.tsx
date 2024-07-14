"use client";
import { useInfiniteQuery } from "react-query";
import { fetchInstagramData, MediaItem } from "@/lib/fetchInstagramData";
import MediaItemComponent from "@/components/MediaItemComponent";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const fetchToken = async () => {
  const response = await fetch('/api/getToken');
  const data = await response.json();
  return data.token;
};

const fetchInstagramDataWithCursor = async ({ pageParam = null }: { pageParam?: string | null }) => {
  const accessToken = await fetchToken();
  return fetchInstagramData(accessToken, 12, pageParam!);
};

export default function GalleryPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery("instagramMedia", fetchInstagramDataWithCursor, {
      getNextPageParam: (lastPage) => lastPage.paging?.cursors?.after || null,
    });

  const items = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="min-h-screen w-full px-6 md:px-20 py-6 font-karantina">
      <motion.div
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
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
          whileInView={{ opacity: 1, scale: 1 }}
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
      ) : (
        <div aria-label="רשימת תמונות וסרטונים" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item: MediaItem) => (
            <MediaItemComponent key={item.id} item={item} />
          ))}
        </div>
      )}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          aria-label="לחץ על מנת לטעון עוד פוסטים"
          className={`flex justify-center items-center mt-6 mx-auto px-4 py-2 text-5xl bg-primary text-white rounded ${
            isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "טוען..." : "טען עוד"}
        </button>
      )}
    </div>
  );
}
