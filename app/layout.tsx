import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Masthead } from "@/components/masthead";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import UmamiAnalytics from "@/components/analytics";

const THEME_IDS = ["sunset", "ocean", "forest", "royal"];

// Applies the saved theme before first paint so navigating/reloading with a
// non-default theme doesn't flash the default palette.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t&&${JSON.stringify(
  THEME_IDS
)}.indexOf(t)!==-1){document.documentElement.classList.add("theme-"+t);document.body.classList.add("theme-"+t);}}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Tanay - A fullstack dev",
  description: "",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased relative`}
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <Masthead />
          {children}
          <Footer />
          <CommandPalette />
          <UmamiAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
