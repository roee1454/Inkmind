"use client";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-8 border-t border-primary/20 bg-black/40 backdrop-blur-xl overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_hsl(var(--primary))]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand (Symmetric to Navbar) */}
        <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-start">
          <Link href="/" className="flex items-start">
            <h2 className="text-4xl font-bold font-karantina tracking-widest text-white transition-all group-hover:text-primary group-hover:text-glow">
              INKMIND
            </h2>
          </Link>
          <p className="text-foreground/60 font-assistant text-lg max-w-xs leading-relaxed">
            סטודיו לקעקועים ופירסינג בשוהם. אמנות מדויקת, יחס אישי ואווירה שאין במקום אחר.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-2xl font-bold font-karantina text-primary tracking-wide mb-2 uppercase">ניווט מהיר</h3>
          <nav className="flex flex-col items-center md:items-start gap-3 font-assistant text-lg">
            <Link href="/" className="hover:text-primary transition-colors">דף הבית</Link>
            <Link href="/tattoos-album" className="hover:text-primary transition-colors">גלריית עבודות</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">מדיניות פרטיות</Link>
            <Link href="/accessability" className="hover:text-primary transition-colors">הצהרת נגישות</Link>
          </nav>
        </div>

        {/* Column 3: Contact & Social */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-2xl font-bold font-karantina text-primary tracking-wide mb-2 uppercase">צרו קשר</h3>
          <div className="flex flex-col items-center md:items-start gap-4 font-assistant text-lg text-foreground/80">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>שוהם מרקט, דקל 30</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-primary" />
              <span>זמינים בתיאום מראש</span>
            </div>
            <div className="flex gap-6 pt-4">
              <Link 
                target="_blank" 
                href="https://www.facebook.com/groups/2212613175694607/user/100075770188018/"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all shadow-lg"
              >
                <FaFacebook size={24} />
              </Link>
              <Link 
                target="_blank" 
                href="https://www.instagram.com/ink.mind_tattoo/"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all shadow-lg"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40 font-assistant">
        <p>&copy; {new Date().getFullYear()} INKMIND STUDIO. כל הזכויות שמורות.</p>
        <div className="flex items-center gap-2">
          <span>נבנה על ידי</span>
          <Link href="https://heily.vercel.app" target="_blank" className="text-primary/60 font-bold hover:text-primary transition-colors cursor-pointer hover:underline">רואי חיילי</Link>
        </div>
      </div>
    </footer>
  );
}

