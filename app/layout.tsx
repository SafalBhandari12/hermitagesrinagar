import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hermitage Hotels and Resorts - Four Star Resort in Srinagar",
  description:
    "Experience luxury and breathtaking views at Hermitage Hotels, a premium 4-star resort in Srinagar, Kashmir. World-class hospitality in the heart of nature.",
  keywords:
    "Hermitage Hotels, Srinagar Resort, Kashmir Hotels, Luxury Resort, Four Star Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Ahrefs Analytics */}
        <Script
          src='https://analytics.ahrefs.com/analytics.js'
          data-key='MHJgHCy3P4YBRgUTz+obIA'
          strategy='afterInteractive'
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
