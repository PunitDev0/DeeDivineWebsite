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
  description: "Making real estate simple, transparent, and reliable",
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
