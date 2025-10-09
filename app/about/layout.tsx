import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us - Hermitage Hotels and Resorts | Luxury Resort in Srinagar Kashmir",
  description:
    "Learn about Hermitage Hotels and Resorts, a premier luxury resort in Srinagar, Kashmir. Discover our commitment to hospitality, excellence, and preserving Kashmir's natural heritage.",
  keywords:
    "About Hermitage Hotels, Kashmir resort history, luxury hospitality Kashmir, Srinagar hotel story, Kashmir heritage resort",
  openGraph: {
    title: "About Us - Hermitage Hotels and Resorts",
    description:
      "Learn about our commitment to hospitality, excellence, and preserving Kashmir's natural heritage.",
    type: "website",
    url: "https://hermitagehotelssrinagar.com/about",
  },
  alternates: {
    canonical: "https://hermitagehotelssrinagar.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
