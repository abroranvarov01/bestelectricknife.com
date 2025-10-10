import { Zap } from "lucide-react"

export function Footer() {
  const links = {
    Product: ["Categories", "Top Picks", "Reviews", "Comparison"],
    Company: ["About Us", "Contact", "Blog", "Careers"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
  }

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-bold">BEST ELECTRIC KNIFE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for electric knife sharpener reviews and guides.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-display font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2025 BestElectricKnife.com. All rights reserved. Amazon Associate Partner. As an Amazon Associate, we earn
            from qualifying purchases. 🛒
          </p>
        </div>
      </div>
    </footer>
  )
}
