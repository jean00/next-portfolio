import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ErrorBoundary from "@/components/error-boundary";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Mosquera | Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React, TypeScript, Next.js, and modern web technologies. View my projects and experience.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Jean Mosquera" }],
  creator: "Jean Mosquera",
  publisher: "Jean Mosquera",
  metadataBase: new URL("https://your-domain.com"), // Update with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Update with your actual domain
    title: "Jean Mosquera | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
    siteName: "Jean Mosquera Portfolio",
    images: [
      {
        url: "/og-image.png", // Add an OpenGraph image
        width: 1200,
        height: 630,
        alt: "Jean Mosquera - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Mosquera | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React, TypeScript, Next.js, and modern web technologies.",
    images: ["/og-image.png"], // Add an OpenGraph image
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Nav />
            <ErrorBoundary
              fallback={
                <div className="min-h-screen flex items-center justify-center p-8">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Content Error</h1>
                    <p className="text-muted-foreground">
                      Something went wrong loading the page content.
                    </p>
                  </div>
                </div>
              }
            >
              {children}
            </ErrorBoundary>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
