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
  authors: [{ name: "Hermitage Hotels and Resorts" }],
  creator: "Hermitage Hotels and Resorts",
  publisher: "Hermitage Hotels and Resorts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hermitagehotelssrinagar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hermitage Hotels and Resorts - Four Star Resort in Srinagar",
    description:
      "Experience luxury and breathtaking views at Hermitage Hotels, a premium 4-star resort in Srinagar, Kashmir. World-class hospitality in the heart of nature.",
    url: "https://hermitagehotelssrinagar.com",
    siteName: "Hermitage Hotels and Resorts",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hermitage Hotels and Resorts - Luxury Resort in Srinagar Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermitage Hotels and Resorts - Four Star Resort in Srinagar",
    description:
      "Experience luxury and breathtaking views at Hermitage Hotels, a premium 4-star resort in Srinagar, Kashmir. World-class hospitality in the heart of nature.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
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
          data-key='iqzmrTQN0NSaqc7OWXSE8A'
          async
        />

        {/* Additional SEO Meta Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#EAB308' />
        <meta name='msapplication-TileColor' content='#EAB308' />
        <meta name='geo.region' content='IN-JK' />
        <meta name='geo.placename' content='Srinagar, Kashmir' />
        <meta name='geo.position' content='34.077256;74.7957152' />
        <meta name='ICBM' content='34.077256, 74.7957152' />

        {/* PWA Manifest */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/icon-192.png' />

        {/* Structured Data for Hotel */}
        <Script
          id='structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hermitage Hotels and Resorts",
              description:
                "Experience luxury and breathtaking views at Hermitage Hotels, a premium 4-star resort in Srinagar, Kashmir. World-class hospitality in the heart of nature.",
              url: "https://hermitagehotelssrinagar.com",
              telephone: "+91-88994-00283",
              email: "thehermitagesrinagar@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Balgarden, Batamaloo",
                addressLocality: "Srinagar",
                addressRegion: "Jammu and Kashmir",
                postalCode: "190010",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.077256",
                longitude: "74.7957152",
              },
              starRating: {
                "@type": "Rating",
                ratingValue: "4",
              },
              priceRange: "₹₹₹",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free WiFi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Restaurant",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Room Service",
                  value: true,
                },
              ],
              hasMap:
                "https://www.google.com/maps/place/Police+Station+-+Batamaloo/@34.0771574,74.799026,56m/data=!3m1!1e3!4m6!3m5!1s0x38e18ff1066153af:0xb23025063b4e42e3!8m2!3d34.077256!4d74.7957152!16s%2Fg%2F124ss91r_",
              sameAs: ["https://www.instagram.com/hermitage_srinagar/"],
            }),
          }}
        />

        {/* Service Worker Registration */}
        <Script
          id='sw-registration'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
