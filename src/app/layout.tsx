import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";

const muli = Mulish({
	subsets: ["cyrillic"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: {
		default: "Arjun Jhukal | Travel Stories & Life Experiences",
		template: "%s | Arjun Jhukal's Adventures",
	},
	description: "Join Arjun Jhukal on his global adventures and life journeys. Discover travel tips, cultural insights, and personal stories from around the world.",
	keywords: ["travel blog", "adventure", "cultural experiences", "travel tips", "wanderlust", "Arjun Jhukal"],
	other: {
		'google-adsense-account': 'ca-pub-8678344611307925'
	},
	openGraph: {
		title: "Arjun Jhukal's Travel & Life Blog",
		description: "Exploring the world one story at a time - travel adventures and life experiences with Arjun Jhukal",
		url: "https://blog.arjunjhukal.com.np",
		siteName: "Arjun Jhukal's Blog",
		images: [
			{
				url: "https://blog.arjunjhukal.com.np/og-image.jpg",
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Arjun Jhukal | Travel Stories & Life Experiences",
		description: "Join me on my global adventures and life journeys around the world",
		images: ['https://blog.arjunjhukal.com.np/twitter-image.jpg'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${muli.className} antialiased`}>
				<Header />
				<main className="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
