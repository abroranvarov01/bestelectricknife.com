import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import Link from "next/link"

const topPicks = [
  {
    name: "Chef'sChoice 15 Trizor XV",
    rating: 4.8,
    reviews: 2847,
    price: "$149.99",
    image: "/professional-electric-knife-sharpener.jpg",
    features: ["3-Stage Sharpening", "Diamond Abrasives", "Professional Results"],
  },
  {
    name: "Work Sharp Culinary E5",
    rating: 4.7,
    reviews: 1923,
    price: "$129.99",
    image: "/modern-electric-knife-sharpener.jpg",
    features: ["Flexible Guides", "Precision Angles", "Compact Design"],
  },
  {
    name: "Presto EverSharp",
    rating: 4.6,
    reviews: 3421,
    price: "$49.99",
    image: "/compact-electric-knife-sharpener.jpg",
    features: ["Budget Friendly", "Easy to Use", "Reliable Performance"],
  },
]

export function TopPicks() {
  return (
    <section id="top-picks" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🔥</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Top Picks 2025</h2>
          </div>
          <p className="text-muted-foreground">Expert-tested and customer-approved electric knife sharpeners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topPicks.map((product, index) => (
            <Link key={index} href="/reviews" className="block">
              <Card className="overflow-hidden blade-shine hover:scale-105 transition-all duration-300 bg-card border-border cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
