import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

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
	metadataBase: new URL("https://blog.arjunjhukal.com.np"),
	alternates: {
		canonical: "/",
	},
	other: {
		'google-adsense-account': 'ca-pub-8678344611307925',
	},
	// themeColor: "#0D47A1"
}


export const viewport: Viewport = {
	themeColor: '#0D47A1',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${muli.className} antialiased`}>
				<Analytics />
				{process.env.NEXT_PUBLIC_GAID && (
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID} />
				)}
				<Link target="_blank" href={"https://www.youtube.com/watch?v=k5gUdTxqq38"} className="w-full block bg-primary text-white text-center p-2 sticky top-0 right-0 left-0 z-10">
					<div className=""><span className="underline">Click</span> to Join us on our Youtube Channel.</div>
				</Link>
				<Header />
				<main className="main">{children}</main>
				<Footer />
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678344611307925"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
