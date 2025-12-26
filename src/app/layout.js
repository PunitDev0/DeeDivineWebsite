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
  title: "Dee Divine Propinfra",
  description: "Dee Divine Propinfra is a trusted real estate company with a strong presence across multiple states in India.",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png"
  },

  openGraph: {
    title: "Dee Divine Propinfra",
    description: "We are spread across multiple states in India, delivering reliable and value-driven real estate solutions.",
    images: [
      {
        url: "/android-chrome-512x512.png", // temporary OG image
        width: 512,
        height: 512,
        alt: "Dee Divine Propinfra"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary",
    title: "Dee Divine Propinfra",
    description: "Trusted real estate company with projects and presence across India.",
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
