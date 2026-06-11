import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varanasi to Ayodhya Taxi | Cab Booking ₹5500 | Nandi Travels",
  description:
    "Book Varanasi to Ayodhya taxi starting ₹5500. Nandi Travels provides safe, comfortable AC cab for Ram Mandir, Hanuman Garhi, Saryu Ghat. 24/7 booking. Call 7268838241.",
  keywords:
    "varanasi to ayodhya taxi, varanasi ayodhya cab, ayodhya taxi booking, varanasi to ayodhya cab fare, ram mandir taxi varanasi",
  alternates: {
    canonical: "/varanasi-to-ayodhya-taxi",
  },
  openGraph: {
    title: "Varanasi to Ayodhya Taxi | Nandi Travels",
    description:
      "Book Varanasi to Ayodhya taxi starting ₹5500. AC cab, professional driver, 24/7 service.",
    url: "https://nanditravelsvaranasi.com/varanasi-to-ayodhya-taxi",
    siteName: "Nandi Travels Varanasi",
    locale: "en_IN",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}