import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Choose the Right Sharpening Angle",
    excerpt: "Understanding blade angles is crucial for optimal sharpening results.",
    image: "/knife-sharpening-angle-guide.jpg",
  },
  {
    title: "Maintaining Your Electric Sharpener",
    excerpt: "Simple maintenance tips to keep your sharpener performing at its best.",
    image: "/electric-sharpener-maintenance.jpg",
  },
  {
    title: "Diamond vs Ceramic Abrasives",
    excerpt: "Comparing the two most popular abrasive materials for knife sharpening.",
    image: "/diamond-abrasive-close-up.jpg",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Sharpening Tips & Guides</h2>
          <p className="text-muted-foreground">Expert advice for getting the most from your knife sharpener</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden blade-shine hover:scale-105 transition-all duration-300 bg-card border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 text-balance">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
