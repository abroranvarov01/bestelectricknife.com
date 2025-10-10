import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Star, Check, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const reviews = [
  {
    slug: "chefs-choice-15-trizor-xv",
    id: 1,
    title: "Chef's Choice 15 Trizor XV Electric Knife Sharpener",
    rating: 4.8,
    price: "$189.99",
    image: "https://m.media-amazon.com/images/I/615RT4PtR8L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ChefsChoice-EdgeSelect-Professional-Sharpener-Sharpening/dp/B004UGUNFM",
    pros: ["3-stage sharpening system", "Diamond abrasives for durability", "Precision angle guides"],
    cons: ["Higher price point", "Takes counter space"],
    verdict: "Best overall electric knife sharpener for professional results at home.",
    fullReview:
      "The Chef's Choice 15 Trizor XV delivers professional-grade sharpening with its patented 3-stage EdgeSelect system. Utilizing 100% diamond abrasives, it ensures long-lasting, ultra-sharp edges for both straight and serrated knives. The precision angle guides make it foolproof, producing consistent 15-degree edges, ideal for high-end kitchen knives.",
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
    title: "Work Sharp Professional Electric Culinary E5",
    rating: 4.6,
    price: "$149.95",
    image: "https://m.media-amazon.com/images/I/71e-TNCTqhL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Work-Sharp-Culinary-Kitchen-Sharpener/dp/B07S6XQ5K2",
    pros: ["Compact and portable design", "Easy one-button operation", "Built-in vacuum for clean sharpening"],
    cons: ["Limited to kitchen knives", "Plastic housing feels less premium"],
    verdict: "Excellent for home cooks seeking convenience and quick sharpening.",
    fullReview:
      "The Work Sharp Culinary E5 offers a user-friendly experience with its one-button operation and flexible abrasive belts. The built-in vacuum keeps your workspace clean, and the compact design is perfect for small kitchens. It sharpens knives in under 90 seconds, making it a convenient choice for busy home cooks.",
    specs: {
      stages: "3-Stage Sharpening",
      abrasive: "Flexible Belts",
      angle: "17 degrees",
      power: "65 watts",
      warranty: "2 years",
    },
  },
  {
    slug: "presto-eversharp",
    id: 3,
    title: "Presto EverSharp Electric Knife Sharpener",
    rating: 4.4,
    price: "$76.99",
    image: "https://m.media-amazon.com/images/I/61MlhKau8zL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Presto-08810-Professional-Electric-Sharpener/dp/B000TYBWJ0",
    pros: ["Affordable and simple to use", "Compact for easy storage", "Sharpens both straight and serrated blades"],
    cons: ["Basic functionality", "Less precise for professional use"],
    verdict: "Best budget option for occasional knife maintenance.",
    fullReview:
      "The Presto EverSharp is a cost-effective solution for basic knife sharpening. Its two-stage system handles both straight and serrated blades with ease, making it a practical choice for casual cooks. While it lacks the precision of higher-end models, its simplicity and affordability make it a great entry-level option.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "Sapphirite",
      angle: "20 degrees",
      power: "60 watts",
      warranty: "1 year",
    },
  },
  {
    slug: "sharp-professional-precision-adjust",
    id: 4,
    title: "Work Sharp Professional Precision Adjust Knife Sharpener",
    rating: 4.7,
    price: "$249.95",
    image: "https://m.media-amazon.com/images/I/81FGKdKYlsL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Sharp-Professional-Precision-Adjust-Sharpener/dp/B0BTTXVQRQ",
    pros: ["Adjustable angle guides", "Versatile for all blade types", "Professional precision"],
    cons: ["Learning curve for adjustments", "Manual angle setting"],
    verdict: "Ideal for knife enthusiasts wanting customizable sharpening angles.",
    fullReview:
      "The Work Sharp Professional Precision Adjust sharpener offers unparalleled versatility with its adjustable angle guides, ranging from 15 to 30 degrees. This makes it suitable for a wide range of blades, from Japanese chef's knives to outdoor knives. While it requires some practice to master, the precision and control are unmatched.",
    specs: {
      stages: "3-Stage Sharpening",
      abrasive: "Diamond & Ceramic",
      angle: "15-30 degrees (adjustable)",
      power: "100 watts",
      warranty: "2 years",
    },
  },
  {
    slug: "chefs-choice-diamond-hone",
    id: 5,
    title: "Chef's Choice Diamond Hone Electric Sharpener",
    rating: 4.5,
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/51ApXLfEiqS._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ChefsChoice-Sharpener-Sharpening-20-degree-Abrasives/dp/B007MHEYW4",
    pros: ["Diamond abrasives for fast sharpening", "Long-lasting edge", "Compact design"],
    cons: ["Noisy during operation", "Bulky for small kitchens"],
    verdict: "Great for heavy-duty sharpening with superior diamond technology.",
    fullReview:
      "The Chef's Choice Diamond Hone is a reliable choice for those needing fast and durable sharpening. Its diamond abrasives create long-lasting edges quickly, and the compact design fits most kitchens. While it's noisier than some competitors, its performance makes it ideal for frequent use.",
    specs: {
      stages: "2-Stage Sharpening",
      abrasive: "100% Diamond",
      angle: "20 degrees",
      power: "120 watts",
      warranty: "3 years",
    },
  },
  {
    slug: "dalstrong-chef-cleaver",
    id: 6,
    title: "DALSTRONG Chef Cleaver with Sharpener",
    rating: 4.3,
    price: "$54.99",
    image: "https://m.media-amazon.com/images/I/615CTKMJjvL._AC_SY879_.jpg",
    amazonUrl: "https://www.amazon.com/DALSTRONG-Chef-Cleaver-Hybrid-Knife/dp/B08F2XWHNK",
    pros: ["Integrated sharpener", "Ergonomic handle", "High-carbon steel blade"],
    cons: ["Limited to cleaver style", "Requires manual sharpening"],
    verdict: "Convenient all-in-one cleaver with built-in maintenance tool.",
    fullReview:
      "The DALSTRONG Chef Cleaver combines a high-carbon steel blade with an integrated sharpener for convenience. Its ergonomic handle ensures a comfortable grip, making it ideal for heavy-duty chopping tasks. While limited to cleaver-style blades, it's a great choice for home cooks who value an all-in-one solution.",
    specs: {
      stages: "Manual Sharpening",
      abrasive: "Ceramic",
      angle: "20 degrees",
      power: "None (Manual)",
      warranty: "1 year",
    },
  },
  {
    slug: "wusthof-petec",
    id: 7,
    title: "Wusthof PEtec Electric Knife Sharpener",
    rating: 4.9,
    price: "$199.99",
    image: "https://m.media-amazon.com/images/I/61b0ng0Gg5L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/W%C3%BCsthof-Classic-Hollow-2-Piece-3-5-inch/dp/B0B6QBT4FH",
    pros: ["Premium German engineering", "4-stage system", "Exceptional precision"],
    cons: ["Premium price", "Large footprint"],
    verdict: "The ultimate choice for professional chefs and serious culinary enthusiasts.",
    fullReview:
      "The Wusthof PEtec is a top-tier sharpener designed for professional kitchens. Its 4-stage system, combined with premium diamond abrasives, delivers razor-sharp edges with exceptional precision. The computer-controlled process ensures consistent results, making it a favorite among chefs who demand the best.",
    specs: {
      stages: "4-Stage Sharpening",
      abrasive: "Premium Diamond",
      angle: "14 degrees",
      power: "150 watts",
      warranty: "5 years",
    },
  },
  {
    slug: "brod-taylor-sourdough-home",
    id: 8,
    title: "Brod & Taylor Sourdough Home",
    rating: 4.6,
    price: "$128.00",
    image: "https://m.media-amazon.com/images/I/51OZMYpKnkL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Brod-Taylor-SH-100-Sourdough-Home/dp/B0C9SJ9FRW",
    pros: ["Precise temperature control", "Compact design", "Consistent starter performance"],
    cons: ["Expensive for a niche product", "Limited to sourdough use"],
    verdict: "Perfect for sourdough enthusiasts seeking consistent starter maintenance.",
    fullReview:
      "The Brod & Taylor Sourdough Home is a specialized tool for sourdough bakers, offering precise temperature control from 41 to 122°F. Its compact design fits easily in any kitchen, ensuring consistent starter performance with minimal effort. While niche, it's a game-changer for maintaining healthy, active sourdough starters.",
    specs: {
      stages: "N/A",
      abrasive: "N/A",
      angle: "N/A",
      power: "15 watts",
      warranty: "1 year",
    },
  },
  {
    slug: "cold-steel-jimi-slash",
    id: 9,
    title: "Cold Steel Jimi Slash Competition Chopper",
    rating: 4.2,
    price: "$399.99",
    image: "https://m.media-amazon.com/images/I/51Fv9n2OkyL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Cold-Steel-Slash-Chopper-Cleaver/dp/B0CBW2DZ5K",
    pros: ["CPM-3V steel blade", "Premium leather sheath", "Ergonomic Kray-Ex handle"],
    cons: ["High price", "Specialized for chopping"],
    verdict: "Specialized high-end chopper for competitive enthusiasts.",
    fullReview:
      "The Cold Steel Jimi Slash Competition Chopper is a premium tool designed for chopping competitions. Its CPM-3V steel blade offers exceptional durability and sharpness, while the ergonomic Kray-Ex handle ensures a secure grip. Limited to 1000 serialized units, it's a collector's item for enthusiasts.",
    specs: {
      stages: "None (Fixed Blade)",
      abrasive: "N/A",
      angle: "N/A",
      power: "None (Manual)",
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

          {/* Product Review Section */}
          <div className="grid md:grid-cols-[400px_1fr] gap-8 mb-12">
            {/* Product Image */}
            <div className="relative">
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.title}
                className="w-full h-auto rounded-lg blade-shine"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-4 font-heading">{review.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="text-2xl font-bold">{review.rating}</span>
                    <span className="text-muted-foreground">/5.0</span>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    {review.price}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">{review.verdict}</p>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg" asChild>
                <a href={review.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </a>
              </Button>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 glass-effect border-green-500/20">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
                    <Check className="w-5 h-5" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-4 glass-effect border-red-500/20">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-400">
                    <X className="w-5 h-5" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>

          {/* Full Review */}
          <Card className="p-8 glass-effect mb-8">
            <h2 className="text-3xl font-bold mb-6 font-heading">Expert Review</h2>
            <p className="text-lg leading-relaxed text-foreground/90">{review.fullReview}</p>
          </Card>

          {/* Technical Specifications */}
          <Card className="p-8 glass-effect">
            <h2 className="text-3xl font-bold mb-6 font-heading">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(review.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-border/50 pb-3">
                  <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <span className="font-semibold">{value}</span>
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
