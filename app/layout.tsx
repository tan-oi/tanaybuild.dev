import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import UmamiAnalytics from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0C0C0D",
};

export const metadata: Metadata = {
  // Relative metadata URLs (the OG image below) resolve against this. Without
  // it Next falls back to localhost and every shared link previews broken.
  metadataBase: new URL("https://tanaybuild.dev"),
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
      className={`${schibstedGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="relative antialiased">
        <ThemeProvider>
          <main className="relative z-1 mx-auto max-w-2xl px-6 py-24 font-sans">
            <SiteHeader />
            {children}
            <SiteFooter />
          </main>
          <UmamiAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
