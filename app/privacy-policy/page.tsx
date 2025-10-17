import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>

          <Card className="p-8 glass-effect">
            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BestElectricKnife.com collects information that you provide directly to us, including when you
                  subscribe to our newsletter, contact us, or interact with our website. This may include your name,
                  email address, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, send you newsletters
                  and updates, respond to your comments and questions, and monitor and analyze trends and usage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Amazon Affiliate Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BestElectricKnife.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. We may earn commissions from qualifying purchases made through links on our
                  site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. Cookies are files with small amounts of data that may include an anonymous unique
                  identifier.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may employ third-party companies and individuals to facilitate our service, provide the service on
                  our behalf, perform service-related services, or assist us in analyzing how our service is used.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable
                  means to protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our contact page.
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
