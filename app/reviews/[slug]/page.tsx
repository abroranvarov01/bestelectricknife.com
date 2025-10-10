import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, Check, X, ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const reviews = [
  {
    slug: "chefs-choice-15-trizor-xv",
    id: 1,
    title: "Chef's Choice 15 Trizor XV",
    rating: 4.8,
    price: "$149.99",
    image: "/electric-knife-sharpener-professional.jpg",
    pros: ["3-stage sharpening", "Professional results", "Durable construction"],
    cons: ["Higher price point", "Requires counter space"],
    verdict: "Best overall electric knife sharpener for serious home cooks and professionals.",
    fullReview:
      "The Chef's Choice 15 Trizor XV represents the pinnacle of home knife sharpening technology. With its patented 3-stage EdgeSelect system, this sharpener delivers professional-grade results that rival hand sharpening by experts. The diamond abrasives ensure long-lasting performance, while the precision angle guides guarantee consistent 15-degree edges every time.",
    specs: {
      stages: "3-Stage Sharpening",
      abrasive: "100% Diamond",
      angle: "15 degrees",
      power: "125 watts",
      warranty: "3 years",
    },
  },
  {
    slug: "work-sharp-culinary-e5",
    id: 2,
    title: "Work Sharp Culinary E5",
    rating: 4.6,
    price: "$79.99",
    image: "/compact-electric-knife-sharpener.jpg",
    pros: ["Compact design", "Easy to use", "Great value"],
    cons: ["Limited to kitchen knives", "Plastic construction"],
    verdict: "Excellent choice for home cooks looking for convenience and quality.",
    fullReview:
      "The Work Sharp Culinary E5 strikes an excellent balance between performance and affordability. Its compact footprint makes it ideal for smaller kitchens, while the flexible abrasive belts provide fast, efficient sharpening. The guided sharpening system ensures consistent results, even for beginners.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "Flexible Belts",
      angle: "17 degrees",
      power: "65 watts",
      warranty: "2 years",
    },
  },
  {
    slug: "presto-eversharp",
    id: 3,
    title: "Presto EverSharp",
    rating: 4.4,
    price: "$39.99",
    image: "/budget-electric-knife-sharpener.jpg",
    pros: ["Affordable", "Simple operation", "Compact"],
    cons: ["Basic features", "Less precise"],
    verdict: "Best budget option for occasional sharpening needs.",
    fullReview:
      "The Presto EverSharp proves that effective knife sharpening doesn't have to break the bank. While it lacks the advanced features of premium models, it delivers reliable performance for everyday kitchen knives. The two-stage system handles both sharpening and honing, making it a practical choice for budget-conscious cooks.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "Sapphirite",
      angle: "20 degrees",
      power: "60 watts",
      warranty: "1 year",
    },
  },
  {
    slug: "smiths-50264-adjustable",
    id: 4,
    title: "Smith's 50264 Adjustable",
    rating: 4.7,
    price: "$119.99",
    image: "/electric-knife-sharpener-adjustable-angle.jpg",
    pros: ["Adjustable angle guides", "Versatile for all blade types", "Precision control"],
    cons: ["Learning curve", "Manual adjustment needed"],
    verdict: "Perfect for knife enthusiasts who want complete control over sharpening angles.",
    fullReview:
      "The Smith's 50264 Adjustable stands out with its unique adjustable angle guides, allowing users to sharpen at angles from 15 to 30 degrees. This versatility makes it suitable for everything from Japanese chef's knives to hunting blades. The precision control comes with a learning curve, but the results are worth the effort.",
    specs: {
      stages: "3-Stage Sharpening",
      abrasive: "Diamond & Ceramic",
      angle: "15-30 degrees (adjustable)",
      power: "100 watts",
      warranty: "2 years",
    },
  },
  {
    slug: "edgecraft-diamond-hone",
    id: 5,
    title: "EdgeCraft Diamond Hone",
    rating: 4.5,
    price: "$89.99",
    image: "/diamond-electric-knife-sharpener-modern.jpg",
    pros: ["Diamond abrasives", "Fast sharpening", "Long-lasting"],
    cons: ["Noisy operation", "Bulky design"],
    verdict: "Ideal for heavy-duty use with superior diamond sharpening technology.",
    fullReview:
      "The EdgeCraft Diamond Hone utilizes premium diamond abrasives for fast, efficient sharpening. Its robust construction and powerful motor make it suitable for high-volume use in busy kitchens. While it's louder than some competitors, the speed and quality of results more than compensate.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "100% Diamond",
      angle: "20 degrees",
      power: "120 watts",
      warranty: "3 years",
    },
  },
  {
    slug: "kitcheniq-edge-grip-pro",
    id: 6,
    title: "KitchenIQ Edge Grip Pro",
    rating: 4.3,
    price: "$54.99",
    image: "/compact-electric-knife-sharpener-kitchen.jpg",
    pros: ["Non-slip base", "Portable", "User-friendly"],
    cons: ["Limited power", "Not for serrated knives"],
    verdict: "Great mid-range option for everyday kitchen knife maintenance.",
    fullReview:
      "The KitchenIQ Edge Grip Pro offers excellent value in the mid-range category. Its non-slip base provides stability during use, while the compact design makes it easy to store. The two-stage system handles most kitchen knives effectively, though it's not suitable for serrated blades.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "Ceramic & Carbide",
      angle: "20 degrees",
      power: "50 watts",
      warranty: "1 year",
    },
  },
  {
    slug: "wusthof-petec",
    id: 7,
    title: "Wusthof PEtec",
    rating: 4.9,
    price: "$199.99",
    image: "/premium-electric-knife-sharpener-professional.jpg",
    pros: ["Premium German engineering", "4-stage system", "Exceptional precision"],
    cons: ["Premium price", "Large footprint"],
    verdict: "The ultimate choice for professional chefs and serious culinary enthusiasts.",
    fullReview:
      "The Wusthof PEtec represents the absolute pinnacle of electric knife sharpening technology. Engineered in Germany with meticulous attention to detail, this 4-stage system delivers unparalleled precision and consistency. The computer-controlled sharpening process ensures optimal results every time, making it the choice of professional chefs worldwide.",
    specs: {
      stages: "4-Stage Sharpening",
      abrasive: "Premium Diamond",
      angle: "14 degrees",
      power: "150 watts",
      warranty: "5 years",
    },
  },
  {
    slug: "brod-taylor-professional",
    id: 8,
    title: "Brod & Taylor Professional",
    rating: 4.6,
    price: "$134.99",
    image: "/professional-electric-knife-sharpener-sleek.jpg",
    pros: ["Quiet operation", "Sleek design", "Consistent results"],
    cons: ["Expensive replacement parts", "Requires maintenance"],
    verdict: "Premium sharpener with whisper-quiet operation and professional-grade results.",
    fullReview:
      "The Brod & Taylor Professional combines elegant design with exceptional performance. Its whisper-quiet motor makes it ideal for open-concept kitchens, while the precision guides ensure consistent results. The sleek stainless steel construction looks as good as it performs.",
    specs: {
      stages: "3-Stage Sharpening",
      abrasive: "Diamond & Stropping",
      angle: "15 degrees",
      power: "90 watts",
      warranty: "3 years",
    },
  },
  {
    slug: "darex-work-sharp-e2",
    id: 9,
    title: "Darex Work Sharp E2",
    rating: 4.2,
    price: "$44.99",
    image: "/budget-electric-knife-sharpener-compact.jpg",
    pros: ["Budget-friendly", "Lightweight", "Easy storage"],
    cons: ["Basic functionality", "Plastic housing"],
    verdict: "Solid entry-level sharpener for casual home cooks on a budget.",
    fullReview:
      "The Darex Work Sharp E2 offers surprising value at its price point. While it lacks advanced features, it handles basic sharpening tasks effectively. The lightweight design and compact footprint make it easy to store, and the simple operation means anyone can achieve decent results.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "Ceramic",
      angle: "20 degrees",
      power: "45 watts",
      warranty: "1 year",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/reviews" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Reviews
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="font-display text-4xl font-bold">{review.title}</h1>
                <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-3 py-1">
                  <Star className="w-5 h-5 fill-primary mr-1" />
                  {review.rating}
                </Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-green-400 mt-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-400" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-red-400 mt-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">Buy on Amazon</Button>
              </div>
            </div>
          </div>

          <Card className="p-8 glass-effect mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Expert Verdict</h2>
            <p className="text-lg leading-relaxed">{review.verdict}</p>
          </Card>

          <Card className="p-8 glass-effect mb-8">
            <h2 className="font-display text-2xl font-bold mb-6">Full Review</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{review.fullReview}</p>
          </Card>

          <Card className="p-8 glass-effect">
            <h2 className="font-display text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(review.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-4 rounded-lg bg-background/50">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
