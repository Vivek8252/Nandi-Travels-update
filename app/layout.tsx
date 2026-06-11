import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Taxi Service in Varanasi | Nandi Travels - 24/7 Cab Booking",
  description:
    "Nandi Travels - Varanasi ki sabse bharosemand taxi service. Airport pickup, Ayodhya taxi, Prayagraj cab, Vindhyachal tour aur local sightseeing. 24/7 booking available. Call 7268838241.",
  keywords:
    "taxi service in varanasi, varanasi cab booking, airport taxi varanasi, varanasi to ayodhya taxi, prayagraj taxi service, vindhyachal taxi booking",
  metadataBase: new URL("https://nanditravelsvaranasi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Taxi Service in Varanasi | Nandi Travels",
    description:
      "24/7 taxi service in Varanasi for airport pickup, Ayodhya, Prayagraj, Vindhyachal and local sightseeing. Book now on WhatsApp or call 7268838241.",
    url: "https://nanditravelsvaranasi.com",
    siteName: "Nandi Travels Varanasi",
    locale: "en_IN",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nanditravelsvaranasi.com/#business",
      name: "Nandi Travels",
      description:
        "Trusted taxi and cab booking service in Varanasi providing safe, comfortable and affordable local and outstation taxi services.",
      url: "https://nanditravelsvaranasi.com",
      telephone: "+917268838241",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.3176,
        longitude: 82.9739,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "₹₹",
      sameAs: ["https://wa.me/917268838241"],
    },
    {
      "@type": "TaxiService",
      "@id": "https://nanditravelsvaranasi.com/#taxiservice",
      name: "Nandi Travels - Taxi Service Varanasi",
      provider: {
        "@id": "https://nanditravelsvaranasi.com/#business",
      },
      areaServed: [
        "Varanasi","Ayodhya","Prayagraj","Vindhyachal","Bodhgaya","Lucknow","Patna","Gorakhpur",
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: "+917268838241",
        serviceUrl: "https://nanditravelsvaranasi.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best taxi service in Varanasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nandi Travels provides one of the best 24/7 taxi services in Varanasi for both local and outstation travel with reliable drivers and clean cars.",
          },
        },
        {
          "@type": "Question",
          name: "Is airport pickup service available in Varanasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide 24/7 airport pickup and drop service from Lal Bahadur Shastri Airport, Varanasi.",
          },
        },
        {
          "@type": "Question",
          name: "What is the taxi fare from Varanasi to Ayodhya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Varanasi to Ayodhya taxi starts from ₹5500. The final fare depends on the vehicle type and travel requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book a taxi in Varanasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book a taxi directly via call or WhatsApp at 7268838241. We provide instant booking confirmation and quick support.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide outstation taxi service from Varanasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer outstation taxi services from Varanasi to Lucknow, Prayagraj, Ayodhya, Bodhgaya and other cities.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">

        {/* Google Tag - Load karta hai dono ke liye */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FV5RNM0T5S"
          strategy="afterInteractive"
        />

        {/* Google Ads + GA4 Config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17832329846');
            gtag('config', 'G-FV5RNM0T5S');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}