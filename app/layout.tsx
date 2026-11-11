import type { Metadata, Viewport } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yasernami.ir"),
  title: "Yaser Nami | UI/UX Designer, Graphic Designer & Motion Designer",
  description:
    "UI/UX design, graphic design, posters, social posts, banners, motion graphics and video editing by Yaser Nami.",
  authors: [{ name: "Yaser Nami" }],
  icons: {
    icon: "/ig/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: "https://yasernami.ir/",
    title: "Yaser Nami | UI/UX Designer, Graphic Designer & Motion Designer",
    description:
      "UI/UX design, graphic design, posters, social posts, banners, motion graphics and video editing by Yaser Nami.",
    images: [
      {
        url: "/ig/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ig/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0c0f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yaser Nami",
  alternateName: "یاسر نامی",
  jobTitle: "UI/UX Designer, Graphic Designer & Motion Designer",
  url: "https://yasernami.ir/",
  image: "https://yasernami.ir/ig/og-image.jpg",
  sameAs: ["https://t.me/yasernami", "https://instagram.com/yasernamii"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="preload"
          href="/fonts/IRANSansX-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IRANSansX-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/ig/yaser-cutout.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
