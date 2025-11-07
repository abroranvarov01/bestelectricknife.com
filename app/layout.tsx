import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Best Electric Knife Sharpeners 2025 | Expert Reviews & Guides",
	description:
		"Discover the best electric knife sharpeners of 2025. Expert reviews, comparisons, and buying guides for home and professional use.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			</body>
		</html>
	)
}
