import { Check, X } from "lucide-react"

const features = [
  { name: "Diamond Abrasives", chefs: true, work: true, presto: false },
  { name: "3-Stage Sharpening", chefs: true, work: false, presto: false },
  { name: "Angle Guides", chefs: true, work: true, presto: true },
  { name: "Professional Results", chefs: true, work: true, presto: false },
  { name: "Compact Design", chefs: false, work: true, presto: true },
  { name: "Budget Friendly", chefs: false, work: false, presto: true },
]

export function Comparison() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Model Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display">Feature</th>
                <th className="text-center p-4 font-display">Chef'sChoice XV</th>
                <th className="text-center p-4 font-display">Work Sharp E5</th>
                <th className="text-center p-4 font-display">Presto</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="p-4">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.chefs ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.work ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.presto ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
