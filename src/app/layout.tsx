import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccessiBeWidget } from "@/components/AccessiBeWidget";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dunn Marketing | Empathy-Driven Brand Building",
    template: "%s | Dunn Marketing",
  },
  description: "We fuel the success of good people doing great work through Empathy-Driven Brand Building that connects, inspires, and converts.",
  keywords: ["marketing agency", "branding", "CT advertising", "fractional CMO", "empathy-driven marketing"],
  authors: [{ name: "Dunn Marketing" }],
  creator: "Dunn Marketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dunn.gabemade.it",
    siteName: "Dunn Marketing",
    title: "Dunn Marketing | Empathy-Driven Brand Building",
    description: "We fuel the success of good people doing great work through Empathy-Driven Brand Building.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunn Marketing | Empathy-Driven Brand Building",
    description: "We fuel the success of good people doing great work through Empathy-Driven Brand Building.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Skip Navigation for Accessibility */}
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        {/* accessiBe Accessibility Widget - WCAG 2.1 AA Compliance */}
        <AccessiBeWidget />
      </body>
    </html>
  );
}
