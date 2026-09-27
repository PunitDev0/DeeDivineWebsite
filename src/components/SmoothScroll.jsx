"use client";

import { useEffect } from "react";


export default function SmoothScroll() {
  useEffect(() => {
    let lenis;
    let mounted = true;
    import("lenis").then((LenisModule) => {
      if (!mounted) return;
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    return () => {
      mounted = false;
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
