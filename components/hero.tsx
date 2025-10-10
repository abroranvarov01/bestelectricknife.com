"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
                animation: `slide ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
          <span className="text-secondary text-sm font-medium tracking-wider">PRECISION SHARPENING TECHNOLOGY</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          Sharper. Faster. <span className="text-primary">Perfect.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          The ultimate collection of electric knife sharpeners for 2025. Professional-grade precision for your kitchen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link href="/reviews">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-foreground/20 hover:border-primary bg-transparent"
            >
              Expert Reviews
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </section>
  )
}
