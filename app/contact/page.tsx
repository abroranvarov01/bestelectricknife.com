import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about knife sharpeners? Want to suggest a product for review? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 glass-effect">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us more..." rows={6} className="bg-background/50" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 glass-effect hover-lift">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">For general inquiries and product review requests</p>
                <a href="mailto:info@bestelectricknife.com" className="text-primary hover:underline">
                  info@bestelectricknife.com
                </a>
              </Card>

              <Card className="p-6 glass-effect hover-lift">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </Card>

              <Card className="p-6 glass-effect">
                <h3 className="font-display text-xl font-bold mb-4">What We Can Help With</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Product recommendations</li>
                  <li>• Review requests</li>
                  <li>• Partnership inquiries</li>
                  <li>• Technical questions</li>
                  <li>• Feedback and suggestions</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
