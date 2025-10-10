"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Home Chef",
    rating: 5,
    text: "This sharpener transformed my kitchen experience. My knives have never been sharper, and the process is so easy!",
    image: "/woman-chef-portrait.png",
  },
  {
    name: "James Rodriguez",
    role: "Professional Chef",
    rating: 5,
    text: "As a professional, I demand the best. This electric sharpener delivers restaurant-quality results every time.",
    image: "/male-chef-portrait.png",
  },
  {
    name: "Emily Chen",
    role: "Culinary Instructor",
    rating: 5,
    text: "I recommend this to all my students. The precision and consistency are unmatched in this price range.",
    image: "/asian-woman-chef-portrait.jpg",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Customer Reviews</h2>

        <Card className="p-8 md:p-12 bg-card border-border relative">
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonials[current].image || "/placeholder.svg"}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-primary"
            />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-lg md:text-xl mb-6 leading-relaxed text-pretty max-w-2xl">
              "{testimonials[current].text}"
            </p>

            <div>
              <p className="font-display font-semibold text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
