import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us - Hermitage Hotels and Resorts | Book Your Stay in Srinagar Kashmir",
  description:
    "Contact Hermitage Hotels and Resorts for reservations and inquiries. Located in Balgarden, Batamaloo Srinagar 190010. Call +91 88994 00283 or email thehermitagesrinagar@gmail.com",
  keywords:
    "Contact Hermitage Hotels, Srinagar hotel booking, Kashmir resort reservations, hotel contact Srinagar, Batamaloo hotel contact",
  openGraph: {
    title: "Contact Us - Hermitage Hotels and Resorts",
    description:
      "Contact us for reservations and inquiries. Located in Balgarden, Batamaloo Srinagar, Kashmir.",
    type: "website",
    url: "https://hermitagehotelssrinagar.com/contact",
  },
  alternates: {
    canonical: "https://hermitagehotelssrinagar.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
