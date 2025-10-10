"use client"

import { useEffect, useRef } from "react"

export function Technology() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let angle = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw blade
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(angle)

      const gradient = ctx.createLinearGradient(-100, 0, 100, 0)
      gradient.addColorStop(0, "rgba(100, 100, 100, 0.3)")
      gradient.addColorStop(0.5, "rgba(200, 200, 200, 0.8)")
      gradient.addColorStop(1, "rgba(100, 100, 100, 0.3)")

      ctx.fillStyle = gradient
      ctx.fillRect(-100, -10, 200, 20)

      ctx.restore()

      angle += 0.01
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Sharpening Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced diamond abrasive technology creates precision edges at optimal angles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg bg-card/50 border border-border overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Stage 1: Coarse Grinding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diamond abrasives reshape and repair damaged blade edges with precision.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Stage 2: Fine Honing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creates a sharp, durable edge with optimal cutting performance.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-3">Stage 3: Polishing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Final stropping creates a razor-sharp, polished edge that lasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
