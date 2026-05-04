"use client";
import { useQuery } from "react-query";
import { MediaItem } from "@/lib/fetchInstagramData";
import MediaItemComponent from "@/components/MediaItemComponent";
import { motion, AnimatePresence } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import { FaInstagram, FaTimes, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import NeonWatermark from "@/components/ui/custom/neon-watermark";

const fetchInstagramData = async (cursor: string | null) => {
  const url = `/api/getToken?limit=16${cursor ? `&after=${cursor}` : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram data');
  }
  return response.json();
};

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  const [cursorHistory, setCursorHistory] = useState<(string | null)[]>([null]);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, isFetching } = useQuery(
    ["instagramMedia", currentCursor],
    () => fetchInstagramData(currentCursor),
    { 
      keepPreviousData: true,
      retry: 1 
    }
  );

  const items = data?.data || [];
  const nextCursor = data?.paging?.cursors?.after;

  const handleNextPage = () => {
    if (nextCursor) {
      setCursorHistory(prev => [...prev, nextCursor]);
      setCurrentCursor(nextCursor);
      setPageNumber(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (cursorHistory.length > 1) {
      const newHistory = [...cursorHistory];
      newHistory.pop();
      const prevCursor = newHistory[newHistory.length - 1];
      setCursorHistory(newHistory);
      setCurrentCursor(prevCursor);
      setPageNumber(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextSlide = () => {
    if (selectedItem?.children) {
      setCurrentSlide((prev) => (prev + 1) % selectedItem.children!.data.length);
    }
  };

  const handlePrevSlide = () => {
    if (selectedItem?.children) {
      setCurrentSlide((prev) => (prev - 1 + selectedItem.children!.data.length) % selectedItem.children!.data.length);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-6 md:px-20 pt-44 pb-20 font-assistant">
      {/* Refined Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center items-center space-y-4 text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-karantina underline underline-offset-8 rotate-3 decoration-primary decoration-wavy animate-neon-flicker font-bold relative inline-block">
          גלריית העבודות
        </h1>
        <p className="pt-6 text-muted-foreground text-xl md:text-2xl max-w-lg mx-auto">
          הצצה לעבודות האחרונות שלנו בסטודיו.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      {isLoading || isFetching ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-full h-80 rounded-2xl overflow-hidden">
              <Skeleton className="w-full h-full bg-white/5" />
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center space-y-8 py-12 text-center">
           <p className="text-3xl font-bold">מצטערים, חלה שגיאה בטעינה.</p>
           <Link target="_blank" href="https://www.instagram.com/ink.mind_tattoo/" className={buttonVariants({ variant: "default", size: "lg" })}>
              <FaInstagram className="mr-2" /> עקבו אחרינו באינסטגרם
           </Link>
        </div>
      ) : (
        <>
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={pageNumber}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {items.map((item: MediaItem) => (
                  <MediaItemComponent 
                    key={item.id} 
                    item={item} 
                    onClick={(item) => {
                      setSelectedItem(item);
                      setCurrentSlide(0);
                    }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col items-center gap-8 mt-24">
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrevPage}
                disabled={cursorHistory.length <= 1 || isFetching}
                className="p-4 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-all group"
              >
                <FaChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-4">
                <span className="text-6xl font-karantina font-bold  animate-neon-flicker">עמוד</span>
                <span className="text-6xl font-karantina font-bold  animate-neon-flicker">{pageNumber}</span>
              </div>

              <button
                onClick={handleNextPage}
                disabled={!nextCursor || isFetching}
                className="p-4 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-all group"
              >
                <FaChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>
            
            {!nextCursor && !isFetching && (
                <p className="text-primary/60 font-assistant text-xl">הגעת לסוף הגלריה שלנו ✨</p>
            )}
          </div>
        </>
      )}

      {/* Enhanced Carousel Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e: any) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-black/60 backdrop-blur-2xl border-2 border-primary/40 rounded-full text-white hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_hsl(var(--color-primary)/0.2)] hover:shadow-[0_0_30px_hsl(var(--color-primary)/0.5)]"
                onClick={() => setSelectedItem(null)}
                aria-label="סגור גלריה"
              >
                <FaTimes className="text-2xl md:text-3xl" />
              </button>

              <div className="relative w-full h-full max-h-[95vh] lg:max-h-[90vh] flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-zinc-950 shadow-[0_0_80px_hsl(var(--primary)/0.2)]">
                
                {/* Media Section (Left/Top) */}
                <div className="relative flex-shrink-0 lg:flex-1 h-[55vh] lg:h-full bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  {/* Carousel Controls */}
                  {selectedItem.children && selectedItem.children.data.length > 1 && (
                    <>
                      <button 
                        onClick={handleNextSlide}
                        className="absolute left-4 z-40 bg-black/40 hover:bg-primary text-white p-3 md:p-4 rounded-full transition-all backdrop-blur-sm"
                      >
                        <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                      </button>
                      <button 
                        onClick={handlePrevSlide}
                        className="absolute right-4 z-40 bg-black/40 hover:bg-primary text-white p-3 md:p-4 rounded-full transition-all backdrop-blur-sm"
                      >
                        <FaChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                      </button>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex gap-1.5 md:gap-2">
                        {selectedItem.children.data.map((_, idx) => (
                          <div 
                            key={idx}
                            className={`h-1 md:h-1.5 w-6 md:w-8 rounded-full transition-all ${idx === currentSlide ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]" : "bg-white/20"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <AnimatePresence mode="wait">
                    {(() => {
                      const activeItem = selectedItem.children 
                        ? selectedItem.children.data[currentSlide] 
                        : selectedItem;
                        
                      const isVideo = activeItem.media_type === "VIDEO";
                      const mediaSrc = activeItem?.media_url || (activeItem as any)?.thumbnail_url;
                      
                      if (!mediaSrc) return null;

                      return (
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="w-full h-full flex items-center justify-center p-2 md:p-4"
                        >
                          {isVideo ? (
                            <video 
                              src={mediaSrc} 
                              controls 
                              autoPlay 
                              loop 
                              playsInline
                              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                            />
                          ) : (
                            <Image 
                              src={mediaSrc} 
                              alt={selectedItem.caption || ""} 
                              width={1200}
                              height={1200}
                              unoptimized
                              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                            />
                          )}
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>

                {/* Info Panel (Right/Bottom) */}
                <div className="w-full lg:w-96 flex flex-col flex-1 lg:h-full bg-zinc-900/80 lg:bg-zinc-900/50 backdrop-blur-2xl p-6 md:p-8 overflow-y-auto min-h-[300px] lg:min-h-0">
                  <div className="flex-1 space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                         <FaInstagram className="text-primary text-xl md:text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base md:text-lg">Inkmind Studio</h3>
                        <p className="text-primary/60 text-xs md:text-sm">@ink.mind_tattoo</p>
                      </div>
                    </div>

                    <p className="text-white/90 text-base md:text-lg leading-relaxed font-assistant whitespace-pre-wrap">
                      {selectedItem.caption}
                    </p>

                    <div className="flex flex-col gap-4 pt-4 md:pt-6">
                      <Link 
                        href={selectedItem.permalink || "#"} 
                        target="_blank"
                        className="flex items-center justify-center gap-3 bg-primary text-black py-3.5 md:py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-[0_0_20px_hsl(var(--color-primary)/0.3)] text-sm md:text-base"
                      >
                        <FaInstagram className="text-lg md:text-xl" /> צפו בפוסט המקורי
                      </Link>
                      
                      {selectedItem.children && (
                        <div className="text-center">
                          <span className="text-white/40 text-xs md:text-sm tracking-widest uppercase font-karantina">
                            תמונה {currentSlide + 1} מתוך {selectedItem.children.data.length}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-auto pt-8 border-t border-white/10 pb-4 lg:pb-0">
                     <p className="text-white/30 text-[10px] md:text-xs text-center uppercase tracking-[0.2em]">Inkmind Private Portfolio</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


