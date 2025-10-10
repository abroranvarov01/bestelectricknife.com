"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-effect p-6 rounded-lg border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground leading-relaxed flex-1">
            This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
            the use of cookies.
          </p>

          <div className="flex gap-2">
            <Button onClick={acceptCookies} className="bg-primary hover:bg-primary/90">
              Accept
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
