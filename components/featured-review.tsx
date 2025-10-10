import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function FeaturedReview() {
  return (
    <section id="reviews" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
              <span className="text-secondary text-sm font-medium tracking-wider">REVIEW OF THE WEEK</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">Chef'sChoice 15 Trizor XV</h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The gold standard in electric knife sharpening. Our comprehensive review covers performance, durability,
              and why professional chefs trust this model for their most valuable blades.
            </p>

            <Link href="/reviews/chefs-choice-15-trizor-xv">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Read Full Review
              </Button>
            </Link>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden blade-shine">
            <img
              src="/chef-using-electric-knife-sharpener.jpg"
              alt="Featured Review"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
