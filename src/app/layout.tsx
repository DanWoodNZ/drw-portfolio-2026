import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dan Wood - Product Designer",
  description: "Product Designer based in NYC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${instrumentSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <body className="flex flex-col font-sans font-medium bg-background text-foreground transition-colors duration-500 overflow-x-hidden max-w-[100vw]">
           <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
             {children}
           </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
