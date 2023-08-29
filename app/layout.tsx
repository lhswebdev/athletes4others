import { ContextProvider } from "@/lib/context";
import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open",
});

const mont = localFont({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  src: [
    { path: "./Mont-Regular.otf", weight: "400", style: "normal" },
    { path: "./Mont-Bold.otf", weight: "700", style: "bold" },
  ],
  // subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <html
        lang="en"
        className={`${inter.variable} ${mont.variable} ${opensans.variable}`}
      >
        <body>{children}</body>
      </html>
    </ContextProvider>
  );
}
