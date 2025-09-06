import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
// import "./styles/scss/globals.scss";
import "@/app/styles/scss/globals.scss";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "500", "600", "900"]
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["100", "200", "300", "500", "600", "900"]
});

export const metadata: Metadata = {
	title: "Teste Contabilidade",
	description: "",
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false, // or true
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`${poppins.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
