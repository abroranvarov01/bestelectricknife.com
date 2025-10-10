import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Award, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To help home cooks and professionals maintain razor-sharp knives through expert guidance and honest reviews.",
    },
    {
      icon: Award,
      title: "Expert Testing",
      description:
        "Every product is rigorously tested in real kitchen conditions to ensure accurate, reliable recommendations.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We listen to our readers and continuously update our reviews based on real-world feedback and experiences.",
    },
    {
      icon: Zap,
      title: "Cutting Edge",
      description:
        "Stay updated with the latest sharpening technology and techniques to keep your knives performing at their best.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're passionate about helping you maintain the sharpest knives in your kitchen. Our team of culinary
              experts and knife enthusiasts test and review electric knife sharpeners to bring you honest, detailed
              recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {values.map((value, index) => (
              <Card key={index} className="p-6 glass-effect hover-lift">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Why Trust Us?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 10 years of combined experience in culinary arts and knife maintenance, our team brings
              professional expertise to every review. We purchase and test products independently, ensuring our
              recommendations are unbiased and based solely on performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a professional chef or a home cooking enthusiast, we're here to help you find the perfect
              electric knife sharpener for your needs.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
