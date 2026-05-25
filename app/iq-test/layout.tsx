import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick IQ Test | QizlyIQ",

  description:
    "Take a fast IQ test with logic, math, and reasoning questions. Get instant results on QizlyIQ.",

  openGraph: {
    title: "Quick IQ Test | QizlyIQ",
    description:
      "Take a fast IQ test with logic, math, and reasoning questions.",
    url: "https://qizlyiq.com/iq-test/1",
    siteName: "QizlyIQ",
    type: "website",
  },
};

export default function IQTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
