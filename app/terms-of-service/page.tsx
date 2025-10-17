import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">Terms of Service</h1>

          <Card className="p-8 glass-effect">
            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using BestElectricKnife.com, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided for informational and educational purposes only. The content on this site,
                  including product reviews and recommendations, represents our opinions and should not be considered
                  professional advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Affiliate Relationships</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BestElectricKnife.com participates in affiliate marketing programs, including the Amazon Associates
                  Program. We may receive compensation when you click on links to products and make purchases. This does
                  not affect the price you pay.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Product Reviews and Recommendations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our product reviews are based on research, testing, and analysis. However, individual results may
                  vary. We strive to provide accurate and up-to-date information, but we make no warranties about the
                  completeness, reliability, or accuracy of this information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of
                  BestElectricKnife.com or its content suppliers and is protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BestElectricKnife.com shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of or inability to use the website or any products purchased
                  through affiliate links.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting to the website. Your continued use of the website following the posting of changes constitutes
                  your acceptance of such changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our contact page.
                </p>
              </section>

              <p className="text-sm text-muted-foreground mt-8">Last updated: January 2025</p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
