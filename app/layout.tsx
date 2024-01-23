import type { Metadata, Viewport } from "next";
import {
  Noto_Sans,
  Caveat,
  Noto_Serif,
  Noto_Sans_Display,
} from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import config from "./config";

const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

/* Variant with tighter tracking. Use for larger optical sizes (e.g. headings and titles) */
const notoSansDisplay = Noto_Sans_Display({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-display",
});

const notoSerif = Noto_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const font_caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL(config.metadata.siteUrl),
  title: {
    default: config.metadata.title,
    template: `%s | ${config.metadata.title}`,
  },
  description: config.metadata.description,
  openGraph: {
    title: config.metadata.title,
    description: config.metadata.description,
    url: "./",
    siteName: config.metadata.title,
    images: [
      {
        url: config.metadata.socialBanner,
        width: 1200,
        height: 630,
        alt: config.metadata.title,
      },
    ],
    locale: config.metadata.locale,
    type: "website",
  },
  twitter: {
    title: config.metadata.title,
    card: "summary_large_image",
    images: [
      {
        url: config.metadata.socialBanner,
        width: 1200,
        height: 630,
        alt: config.metadata.title,
      },
    ],
  },
  alternates: {
    canonical: "./",
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
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo_tc_black.ico",
        href: "/logo_tc_black.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo_tc_white.ico",
        href: "/logo_tc_white.ico",
      },
    ],
  },
  creator: config.author.name,
  publisher: config.author.name,
  authors: [
    {
      name: config.author.name,
      url: config.author.website,
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#23212B",
  colorScheme: "dark light"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth motion-reduce:scroll-auto"
    >
      <body
        className={`${notoSans.variable} ${notoSansDisplay.variable} ${notoSerif.variable} ${font_caveat.variable} font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
