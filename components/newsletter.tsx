"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-effect p-8 md:p-12 rounded-lg text-center border border-primary/20">
          <Mail className="w-12 h-12 text-primary mx-auto mb-6" />

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Stay Sharp</h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get the latest reviews, sharpening tips, and exclusive deals delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background/50"
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
