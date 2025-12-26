import "./globals.css";
import Navbar from "@/components/hero-page/navbar";
import Footer from "@/components/hero-page/footer";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

// ✅ Load only Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Dee Divine Developers",
  description: "Real Estate Company Across India",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png"
  },

  openGraph: {
    title: "Dee Divine Developers",
    description: "We are spread across multiple states in India",
    images: [
      {
        url: "/android-chrome-512x512.png", // 👈 TEMP OG IMAGE
        width: 512,
        height: 512,
        alt: "Dee Divine Developers"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary",
    images: ["/android-chrome-512x512.png"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
