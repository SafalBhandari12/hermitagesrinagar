import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Luxury Rooms & Suites - Hermitage Hotels and Resorts Srinagar Kashmir",
  description:
    "Discover our luxury rooms and suites at Hermitage Hotels and Resorts in Srinagar, Kashmir. Choose from Deluxe Rooms, Premium Rooms, and luxury suites with stunning valley views and modern amenities.",
  keywords:
    "Hermitage Hotels rooms, Kashmir luxury suites, Srinagar hotel accommodation, valley view rooms, premium hotel rooms Kashmir, deluxe rooms Srinagar",
  openGraph: {
    title: "Luxury Rooms & Suites - Hermitage Hotels and Resorts",
    description:
      "Discover our luxury rooms and suites with stunning valley views and modern amenities in the heart of Kashmir.",
    type: "website",
    url: "https://hermitagehotelssrinagar.com/rooms",
  },
  alternates: {
    canonical: "https://hermitagehotelssrinagar.com/rooms",
  },
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
