import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      title: "Chef's Choice 15 Trizor XV",
      rating: 4.8,
      price: "$149.99",
      image: "/electric-knife-sharpener-professional.jpg",
      pros: ["3-stage sharpening", "Professional results", "Durable construction"],
      cons: ["Higher price point", "Requires counter space"],
      verdict: "Best overall electric knife sharpener for serious home cooks and professionals.",
    },
    {
      id: 2,
      title: "Work Sharp Culinary E5",
      rating: 4.6,
      price: "$79.99",
      image: "/compact-electric-knife-sharpener.jpg",
      pros: ["Compact design", "Easy to use", "Great value"],
      cons: ["Limited to kitchen knives", "Plastic construction"],
      verdict: "Excellent choice for home cooks looking for convenience and quality.",
    },
    {
      id: 3,
      title: "Presto EverSharp",
      rating: 4.4,
      price: "$39.99",
      image: "/budget-electric-knife-sharpener.jpg",
      pros: ["Affordable", "Simple operation", "Compact"],
      cons: ["Basic features", "Less precise"],
      verdict: "Best budget option for occasional sharpening needs.",
    },
    {
      id: 4,
      title: "Smith's 50264 Adjustable",
      rating: 4.7,
      price: "$119.99",
      image: "/electric-knife-sharpener-adjustable-angle.jpg",
      pros: ["Adjustable angle guides", "Versatile for all blade types", "Precision control"],
      cons: ["Learning curve", "Manual adjustment needed"],
      verdict: "Perfect for knife enthusiasts who want complete control over sharpening angles.",
    },
    {
      id: 5,
      title: "EdgeCraft Diamond Hone",
      rating: 4.5,
      price: "$89.99",
      image: "/diamond-electric-knife-sharpener-modern.jpg",
      pros: ["Diamond abrasives", "Fast sharpening", "Long-lasting"],
      cons: ["Noisy operation", "Bulky design"],
      verdict: "Ideal for heavy-duty use with superior diamond sharpening technology.",
    },
    {
      id: 6,
      title: "KitchenIQ Edge Grip Pro",
      rating: 4.3,
      price: "$54.99",
      image: "/compact-electric-knife-sharpener-kitchen.jpg",
      pros: ["Non-slip base", "Portable", "User-friendly"],
      cons: ["Limited power", "Not for serrated knives"],
      verdict: "Great mid-range option for everyday kitchen knife maintenance.",
    },
    {
      id: 7,
      title: "Wusthof PEtec",
      rating: 4.9,
      price: "$199.99",
      image: "/premium-electric-knife-sharpener-professional.jpg",
      pros: ["Premium German engineering", "4-stage system", "Exceptional precision"],
      cons: ["Premium price", "Large footprint"],
      verdict: "The ultimate choice for professional chefs and serious culinary enthusiasts.",
    },
    {
      id: 8,
      title: "Brod & Taylor Professional",
      rating: 4.6,
      price: "$134.99",
      image: "/professional-electric-knife-sharpener-sleek.jpg",
      pros: ["Quiet operation", "Sleek design", "Consistent results"],
      cons: ["Expensive replacement parts", "Requires maintenance"],
      verdict: "Premium sharpener with whisper-quiet operation and professional-grade results.",
    },
    {
      id: 9,
      title: "Darex Work Sharp E2",
      rating: 4.2,
      price: "$44.99",
      image: "/budget-electric-knife-sharpener-compact.jpg",
      pros: ["Budget-friendly", "Lightweight", "Easy storage"],
      cons: ["Basic functionality", "Plastic housing"],
      verdict: "Solid entry-level sharpener for casual home cooks on a budget.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">Expert Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth analysis and testing of the best electric knife sharpeners on the market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 glass-effect hover-lift flex flex-col">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.title}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{review.title}</h3>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Star className="w-4 h-4 fill-primary mr-1" />
                    {review.rating}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-green-400 mb-2">Pros:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {review.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-red-400 mb-2">Cons:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {review.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium">{review.verdict}</p>
                  </div>

                  <Link href={`/reviews/${review.id}`} className="block">
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Read More</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
