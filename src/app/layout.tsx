import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Always For Fit",
	description: "Stay Always Fit by tracking your weight",
	manifest: "/manifest.json",
	formatDetection: {telephone: false},
	appleWebApp: {
		capable: true,
		title: "Always For Fit",
		statusBarStyle: "default"
	},
	icons: {
		shortcut: ["/favicon.ico"],
		apple: [{url: "/apple-touch-icon.png"}]
	},
	other: {
		"Always For Fit": "Always For Fit",
		"msapplication-tap-highlight": "no",
		"msapplication-TileColor": "#FAFBFD",
		HandheldFriendly: "true"
	}
};

export const viewport: Viewport = {
	themeColor: "#00C897",
	maximumScale: 1,
	viewportFit: "cover"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
