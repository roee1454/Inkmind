"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

interface ServiceCardProps {
    title: string,
    description: any,
    icon: any,
    href?: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card 
      className="w-full relative group overflow-hidden bg-black/60 backdrop-blur-xl border-2 border-primary/30 rounded-2xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]"
      role="region"
      aria-labelledby="כותרת-כרטיס"
      aria-describedby="תיאור-כרטיס"
    >
      {/* Animated Corner Glows */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150" />

      <CardContent className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Icon Container */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-black/40 border-2 border-primary/40 rounded-3xl rotate-3 transition-transform duration-500">
              <div className="scale-125 md:scale-150 text-primary" aria-hidden="true">{icon}</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 text-center md:text-start">
            <CardTitle 
              id="כותרת-כרטיס"
              className="font-karantina text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground text-glow"
            >
              {title || ""} 
            </CardTitle>
            <div 
              id="תיאור-כרטיס"
              className="max-w-2xl text-foreground/70 text-lg sm:text-xl md:text-2xl font-light font-assistant leading-relaxed"
            >
              { description || "" }
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
