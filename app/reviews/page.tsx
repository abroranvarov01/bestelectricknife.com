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
    title: "Chef's Choice 15 Trizor XV Electric Knife Sharpener",
    rating: 4.8,
    price: "$189.99",
    image: "https://m.media-amazon.com/images/I/615RT4PtR8L._AC_SX679_.jpg",
    pros: ["3-stage sharpening system", "Diamond abrasives for durability", "Precision angle guides"],
    cons: ["Higher price point", "Takes counter space"],
    verdict: "Best overall electric knife sharpener for professional results at home.",
  },
  {
    id: 2,
    title: "Work Sharp Professional Electric Culinary E5",
    rating: 4.6,
    price: "$149.95",
    image: "https://m.media-amazon.com/images/I/71e-TNCTqhL._AC_SX679_.jpg",
    pros: ["Compact and portable design", "Easy one-button operation", "Built-in vacuum for clean sharpening"],
    cons: ["Limited to kitchen knives", "Plastic housing feels less premium"],
    verdict: "Excellent for home cooks seeking convenience and quick sharpening.",
  },
  {
    id: 3,
    title: "Presto EverSharp Electric Knife Sharpener",
    rating: 4.4,
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/61MlhKau8zL._AC_SX679_.jpg",
    pros: ["Affordable and simple to use", "Compact for easy storage", "Sharpens both straight and serrated blades"],
    cons: ["Basic functionality", "Less precise for professional use"],
    verdict: "Best budget option for occasional knife maintenance.",
  },
  {
    id: 4,
    title: "Sharp Professional Precision Adjust Electric Sharpener",
    rating: 4.7,
    price: "$119.99",
    image: "https://m.media-amazon.com/images/I/81FGKdKYlsL._AC_SX679_.jpg",
    pros: ["Adjustable angle guides", "Versatile for all blade types", "Professional precision"],
    cons: ["Learning curve for adjustments", "Manual angle setting"],
    verdict: "Ideal for knife enthusiasts wanting customizable sharpening angles.",
  },
  {
    id: 5,
    title: "Chef's Choice Diamond Hone Electric Sharpener",
    rating: 4.5,
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/51ApXLfEiqS._AC_SX679_.jpg",
    pros: ["Diamond abrasives for fast sharpening", "Long-lasting edge", "Compact design"],
    cons: ["Noisy during operation", "Bulky for small kitchens"],
    verdict: "Great for heavy-duty sharpening with superior diamond technology.",
  },
  {
    id: 6,
    title: "DALSTRONG Chef Cleaver with Sharpener",
    rating: 4.3,
    price: "$54.99",
    image: "https://m.media-amazon.com/images/I/615CTKMJjvL._AC_SY879_.jpg",
    pros: ["Integrated sharpener", "Ergonomic handle", "High-carbon steel blade"],
    cons: ["Limited to cleaver style", "Requires manual sharpening"],
    verdict: "Convenient all-in-one cleaver with built-in maintenance tool.",
  },
  {
    id: 7,
    title: "Wusthof PEtec Electric Knife Sharpener",
    rating: 4.9,
    price: "$199.99",
    image: "https://m.media-amazon.com/images/I/61b0ng0Gg5L._AC_SX679_.jpg",
    pros: ["Premium German engineering", "4-stage sharpening system", "Exceptional precision"],
    cons: ["High cost", "Large footprint"],
    verdict: "Ultimate choice for professional chefs demanding top precision.",
  },
  {
    id: 8,
    title: "Brod & Taylor Professional Knife Sharpener",
    rating: 4.6,
    price: "$134.99",
    image: "https://m.media-amazon.com/images/I/51OZMYpKnkL._AC_SX679_.jpg",
    pros: ["Quiet operation", "Sleek stainless design", "Consistent professional results"],
    cons: ["Expensive replacement belts", "Requires regular maintenance"],
    verdict: "Premium sharpener with whisper-quiet performance for daily use.",
  },
  {
    id: 9,
    title: "Cold Steel Jimi Slash Competition Chopper Sharpener",
    rating: 4.2,
    price: "$44.99",
    image: "https://m.media-amazon.com/images/I/51Fv9n2OkyL._AC_SX679_.jpg",
    pros: ["Compact and portable", "Quick sharpening", "Affordable for beginners"],
    cons: ["Basic functionality", "Not for heavy-duty use"],
    verdict: "Solid entry-level sharpener for casual users on a budget.",
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
              <Card key={review.slug} className="p-6 glass-effect hover-lift flex flex-col">
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

                  <Link href={`/reviews/${review.slug}`} className="block">
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
