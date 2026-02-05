import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service marketing agency offering branding, strategy, content, digital marketing, advertising, public relations, analytics, and fractional CMO services.",
  openGraph: {
    title: "Marketing Services | Dunn Marketing",
    description:
      "We take an empathy-driven approach to branding, strategy, content, digital marketing, advertising, PR, analytics, and fractional CMO services.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
