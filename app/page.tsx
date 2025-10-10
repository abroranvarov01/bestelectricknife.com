import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Categories } from "@/components/categories"
import { TopPicks } from "@/components/top-picks"
import { FeaturedReview } from "@/components/featured-review"
import { Technology } from "@/components/technology"
import { Testimonials } from "@/components/testimonials"
import { Comparison } from "@/components/comparison"
import { Blog } from "@/components/blog"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Categories />
      <TopPicks />
      <FeaturedReview />
      <Technology />
      <Testimonials />
      <Comparison />
      <Blog />
      <Newsletter />
      <Footer />
      <CookieBanner />
    </main>
  )
}
