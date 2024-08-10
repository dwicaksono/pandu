import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/share/navbar";
import ModalProvider from "@/components/share/modal-provider";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({
	subsets: ["latin"],
	variable: "--font-unbounded",
});

const theSignature = localFont({
	src: "../../public/fonts/Thesignature.ttf",
	display: "swap",
	variable: "--font-the-signature",
});

export const metadata: Metadata = {
	title: "Zambrood",
	description:
		"Tets frontend project from pandooin as frontend developer contract",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${theSignature.variable} ${unbounded.variable}`}>
				<ModalProvider />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
