/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        // 👇 Add custom font family
        fontFamily: {
          poppins: ["var(--font-poppins)", "sans-serif"],
          geist: ["var(--font-geist-sans)", "sans-serif"],
          geistMono: ["var(--font-geist-mono)", "monospace"],
        },
  
        // 👇 Optional: color palette extension
        colors: {
          brand: {
            purple: "#9b1b8f",
            light: "#f3dff3",
          },
        },
  
        // 👇 Optional: subtle animations (fade, slide)
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        },
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          slideUp: "slideUp 0.8s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")], // ✅ required for shadcn/ui
  };
  