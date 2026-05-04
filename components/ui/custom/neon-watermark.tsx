import { cn } from "@/lib/utils"

export interface NeonWatermarkProps {
    className?: string
    topText?: string
    bottomText?: string
}

export default function NeonWatermark({ className = "", topText = "INK", bottomText = "MIND" }: NeonWatermarkProps) {
    return (
        <div className={cn(className, "pointer-events-none select-none overflow-hidden")}>
      
          {/* Atmospheric Background Glow */}
          <div className="absolute w-[90vw] h-[70vh] bg-primary/10 blur-[180px] rounded-full animate-pulse" />

          <div className="relative animate-neon-flicker scale-[0.6] md:scale-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <svg 
              viewBox="0 0 600 600" 
              className="w-[85vw] h-[85vw] md:w-[650px] md:h-[650px] -rotate-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* High-Intensity Primary Glow */}
                <filter id="neon-glow-primary" x="-50%" y="-50%" width="200%" height="200%">
                  <feFlood floodColor="hsl(var(--color-primary))" result="color" />
                  <feComposite in="color" in2="SourceGraphic" operator="in" />
                  <feGaussianBlur stdDeviation="6" result="blur6" />
                  <feGaussianBlur stdDeviation="12" result="blur12" />
                  <feGaussianBlur stdDeviation="24" result="blur24" />
                  <feMerge>
                    <feMergeNode in="blur24" />
                    <feMergeNode in="blur12" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Subtle Accent Glow */}
                <filter id="neon-glow-subtle" x="-50%" y="-50%" width="200%" height="200%">
                  <feFlood floodColor="hsl(var(--color-primary))" result="color" />
                  <feComposite in="color" in2="SourceGraphic" operator="in" />
                  <feGaussianBlur stdDeviation="3" result="blur3" />
                  <feMerge>
                    <feMergeNode in="blur3" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <mask id="complex-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  {/* Space for Top Text */}
                  <text x="50%" y="42%" textAnchor="middle" className="font-script font-bold" style={{ fontSize: '260px' }} fill="black" stroke="black" strokeWidth="25" >{topText}</text>
                  {/* Space for Bottom Text */}
                  <text x="50%" y="68%" textAnchor="middle" className="font-script font-bold" style={{ fontSize: '130px' }} fill="black" stroke="black" strokeWidth="20" >{bottomText}</text>
                </mask>
              </defs>

              {/* Main Concentric Ring (Thick) */}
              <circle 
                cx="300" cy="300" r="245" fill="none" stroke="currentColor" strokeWidth="10" 
                mask="url(#complex-mask)" filter="url(#neon-glow-primary)" className="opacity-80" 
                style={{ stroke: 'var(--color-primary)' }} 
              />

              {/* Accent Inner Ring (Thin) */}
              <circle 
                cx="300" cy="300" r="230" fill="none" stroke="currentColor" strokeWidth="2" 
                mask="url(#complex-mask)" filter="url(#neon-glow-subtle)" className="opacity-40" 
                style={{ stroke: 'var(--color-primary)' }} 
              />

              
              {/* Main Typography */}
              <text 
                x="50%" y="42%" textAnchor="middle" className="font-script font-bold" 
                style={{ fontSize: '260px', fill: 'white' }} filter="url(#neon-glow-primary)"
              >
                {topText}
              </text>

              <text 
                x="50%" y="68%" textAnchor="middle" className="font-script font-bold" 
                style={{ fontSize: '130px', fill: 'white' }} filter="url(#neon-glow-primary)"
              >
                {bottomText}
              </text>

              {/* Professional Subtitle */}
              <text 
                x="51%" y="500" textAnchor="middle" className="font-karantina font-bold" 
                style={{ fontSize: '45px', fill: 'white', letterSpacing: '0.4em' }} 
                filter="url(#neon-glow-subtle)"
              >
                STUDIO
              </text>

              {/* Loose Power Wire (Grounds the design) */}
              <path 
                d="M300,550 Q310,580 280,620 T250,700" 
                fill="none" stroke="white" strokeWidth="2" opacity="0.1" 
              />
              <path 
                d="M315,550 Q325,590 300,640 T290,720" 
                fill="none" stroke="white" strokeWidth="2" opacity="0.05" 
              />
            </svg>
          </div>

        </div>
    )
}

