import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReviewsPage() {
	const reviews = [
		{
			slug: "chefs-choice-15-trizor-xv",
			title: "Chef's Choice 15 Trizor XV Electric Knife Sharpener",
			rating: 4.8,
			price: "$189.99",
			image: "https://m.media-amazon.com/images/I/615RT4PtR8L._AC_SX679_.jpg",
			pros: ["3-stage sharpening system", "Diamond abrasives for durability", "Precision angle guides"],
			cons: ["Higher price point", "Takes counter space"],
			verdict: "Best overall electric knife sharpener for professional results at home.",
			amazonLink: "https://amzn.to/3LNz0nS",
		},
		{
			slug: "work-sharp-culinary-e5",
			title: "Work Sharp Professional Electric Culinary E5",
			rating: 4.6,
			price: "$149.95",
			image: "https://m.media-amazon.com/images/I/71e-TNCTqhL._AC_SX679_.jpg",
			pros: ["Compact and portable design", "Easy one-button operation", "Built-in vacuum for clean sharpening"],
			cons: ["Limited to kitchen knives", "Plastic housing feels less premium"],
			verdict: "Excellent for home cooks seeking convenience and quick sharpening.",
			amazonLink: "https://amzn.to/3WLvvkh",
		},
		{
			slug: "presto-eversharp",
			title: "Presto EverSharp Electric Knife Sharpener",
			rating: 4.4,
			price: "$76.99",
			image: "https://m.media-amazon.com/images/I/61MlhKau8zL._AC_SX679_.jpg",
			pros: ["Affordable and simple to use", "Compact for easy storage", "Sharpens both straight and serrated blades"],
			cons: ["Basic functionality", "Less precise for professional use"],
			verdict: "Best budget option for occasional knife maintenance.",
			amazonLink: "https://amzn.to/3Jo0zDL",
		},
		{
			slug: "sharp-professional-precision-adjust",
			title: "Work Sharp Professional Precision Adjust Knife Sharpener",
			rating: 4.7,
			price: "$249.95",
			image: "https://m.media-amazon.com/images/I/81FGKdKYlsL._AC_SX679_.jpg",
			pros: ["Adjustable angle guides", "Versatile for all blade types", "Professional precision"],
			cons: ["Learning curve for adjustments", "Manual angle setting"],
			verdict: "Ideal for knife enthusiasts wanting customizable sharpening angles.",
			amazonLink: "https://amzn.to/43XbBGK",
		},
		{
			slug: "chefs-choice-diamond-hone",
			title: "Chef's Choice Diamond Hone Electric Sharpener",
			rating: 4.5,
			price: "$89.99",
			image: "https://m.media-amazon.com/images/I/51ApXLfEiqS._AC_SX679_.jpg",
			pros: ["Diamond abrasives for fast sharpening", "Long-lasting edge", "Compact design"],
			cons: ["Noisy during operation", "Bulky for small kitchens"],
			verdict: "Great for heavy-duty sharpening with superior diamond technology.",
			amazonLink: "https://amzn.to/47tUFdh",
		},
		{
			slug: "dalstrong-chef-cleaver",
			title: "DALSTRONG Chef Cleaver with Sharpener",
			rating: 4.3,
			price: "$54.99",
			image: "https://m.media-amazon.com/images/I/615CTKMJjvL._AC_SY879_.jpg",
			pros: ["Integrated sharpener", "Ergonomic handle", "High-carbon steel blade"],
			cons: ["Limited to cleaver style", "Requires manual sharpening"],
			verdict: "Convenient all-in-one cleaver with built-in maintenance tool.",
			amazonLink: "https://amzn.to/4hKft3G",
		},
		{
			slug: "wusthof-petec",
			title: "Wusthof PEtec Electric Knife Sharpener",
			rating: 4.9,
			price: "$199.99",
			image: "https://m.media-amazon.com/images/I/61b0ng0Gg5L._AC_SX679_.jpg",
			pros: ["Premium German engineering", "4-stage system", "Exceptional precision"],
			cons: ["Premium price", "Large footprint"],
			verdict: "The ultimate choice for professional chefs and serious culinary enthusiasts.",
			amazonLink: "https://amzn.to/4r5qOQn",
		},
		{
			slug: "brod-taylor-sourdough-home",
			title: "Brod & Taylor Sourdough Home",
			rating: 4.6,
			price: "$128.00",
			image: "https://m.media-amazon.com/images/I/51OZMYpKnkL._AC_SX679_.jpg",
			pros: ["Precise temperature control", "Compact design", "Consistent starter performance"],
			cons: ["Expensive for a niche product", "Limited to sourdough use"],
			verdict: "Perfect for sourdough enthusiasts seeking consistent starter maintenance.",
			amazonLink: "https://amzn.to/487WhZx",
		},
		{
			slug: "cold-steel-jimi-slash",
			title: "Cold Steel Jimi Slash Competition Chopper",
			rating: 4.2,
			price: "$399.99",
			image: "https://m.media-amazon.com/images/I/51Fv9n2OkyL._AC_SX679_.jpg",
			pros: ["CPM-3V steel blade", "Premium leather sheath", "Ergonomic Kray-Ex handle"],
			cons: ["High price", "Specialized for chopping"],
			verdict: "Specialized high-end chopper for competitive enthusiasts.",
			amazonLink: "https://amzn.to/4nJ80mT",
		},
	]

	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<main className="pt-24 pb-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">Expert Reviews</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							In-depth analysis and testing of the best electric knife sharpeners on the market
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{reviews.map((review) => (
							<Card key={review.slug} className="p-6 glass-effect hover-lift flex flex-col">
								<img
									src={review.image || "/placeholder.svg"}
									alt={review.title}
									className="w-full h-[200px] object-cover rounded-lg mb-4"
								/>

								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="font-display text-xl font-bold">{review.title}</h3>
									</div>
									<Badge className="bg-primary/20 text-primary border-primary/30">
										<Star className="w-4 h-4 fill-primary mr-1" />
										{review.rating}
									</Badge>
								</div>

								<div className="space-y-4 flex-1">
									<div>
										<h4 className="font-semibold text-sm text-green-400 mb-2">Pros:</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											{review.pros.map((pro, i) => (
												<li key={i}>• {pro}</li>
											))}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold text-sm text-red-400 mb-2">Cons:</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											{review.cons.map((con, i) => (
												<li key={i}>• {con}</li>
											))}
										</ul>
									</div>

									<div className="pt-4 border-t border-border">
										<p className="text-sm font-medium">{review.verdict}</p>
									</div>
								</div>

								<div className="mt-4">
									<Link href={`/reviews/${review.slug}`} className="block">
										<Button className="w-full bg-primary hover:bg-primary/90">Read Full Review</Button>
									</Link>
								</div>
							</Card>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
