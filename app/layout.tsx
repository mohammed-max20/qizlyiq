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
  title: "QizlyIQ - Train Your Brain",
  description:
    "Advanced IQ tests, brain games, memory challenges, and logic puzzles designed to improve focus and thinking skills.",

  icons: {
    icon: "/icon.ico",
  },

  keywords: [
    "IQ test",
    "brain games",
    "logic puzzles",
    "memory training",
    "focus training",
    "QizlyIQ",
  ],
  openGraph: {
    title: "QizlyIQ",
    description: "Train your brain with advanced IQ tests and brain games.",
    url: "https://qizlyiq.com",
    siteName: "QizlyIQ",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXRELNZ45N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXRELNZ45N');
          `}
        </Script>

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6492988602727684"
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}

/*import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "QizlyIQ - Train Your Brain",
  description:
    "Advanced IQ tests, brain games, memory challenges, and logic puzzles designed to improve focus and thinking skills.",
  keywords: [
    "IQ test",
    "brain games",
    "logic puzzles",
    "memory training",
    "focus training",
    "QizlyIQ",
  ],
  openGraph: {
    title: "QizlyIQ",
    description: "Train your brain with advanced IQ tests and brain games.",
    url: "https://qizlyiq.com",
    siteName: "QizlyIQ",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
/*import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "QizlyIQ",
  description:
    "Advanced IQ tests, brain games, memory training, and logic challenges.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
*/
