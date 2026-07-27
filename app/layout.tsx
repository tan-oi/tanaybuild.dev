import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LocalTime from "@/components/local-time";
import UmamiAnalytics from "@/components/analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0C0C0D",
};

export const metadata: Metadata = {
  title: "Tanay Ghoriwala",
  description: "Software engineer.",
  // icons: {
  //   icon: "/app/favicon.ico",
  // },
  openGraph: {
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased relative">
        <ThemeProvider>
          <LocalTime />
          {children}
          <UmamiAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
