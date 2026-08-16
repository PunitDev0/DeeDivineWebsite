import "./globals.css";
import Navbar from "@/components/hero-page/navbar";
import Footer from "@/components/hero-page/footer";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";

// ✅ Load only Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Trusted Real Estate Consultants in Delhi NCR | Dee Divine Propinfra",
  description: "Dee Divine Propinfra offers trusted real estate consulting in Delhi NCR & Gurgaon- RERA approved plots, verified listings & expert guidance. Book a consultation today.",

  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },

  openGraph: {
    title: "Trusted Real Estate Consultants in Delhi NCR | Dee Divine Propinfra",
    description: "Dee Divine Propinfra offers trusted real estate consulting in Delhi NCR & Gurgaon- RERA approved plots, verified listings & expert guidance. Book a consultation today.",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "Dee Divine Propinfra Logo"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary",
    title: "Trusted Real Estate Consultants in Delhi NCR | Dee Divine Propinfra",
    description: "Dee Divine Propinfra offers trusted real estate consulting in Delhi NCR & Gurgaon- RERA approved plots, verified listings & expert guidance.",
    images: ["/assets/logo.png"]
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased overflow-x-hidden`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
