import { Card } from "@/components/ui/card"
import { Home, Briefcase, Layers, Package } from "lucide-react"

const categories = [
  {
    icon: Home,
    title: "Home Sharpeners",
    description: "Perfect for everyday kitchen use with easy operation and reliable results.",
  },
  {
    icon: Briefcase,
    title: "Professional Grade",
    description: "Commercial-quality sharpeners for chefs and culinary professionals.",
  },
  {
    icon: Layers,
    title: "Universal Models",
    description: "Versatile sharpeners that handle all blade types and angles.",
  },
  {
    icon: Package,
    title: "Compact Design",
    description: "Space-saving solutions without compromising on performance.",
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Product Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 blade-shine hover:scale-105 transition-all duration-300 cursor-pointer bg-card border-border hover:border-primary/50"
            >
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
