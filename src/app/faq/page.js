import FaqContent from "./faq-content";

export const metadata = {
  title: "Frequently Asked Questions (FAQs) | Dee Divine Propinfra",
  description:
    "Find comprehensive answers to questions about DDJAY plots in Gurgaon, HARERA legal compliance, plot loans, booking process, stamp duty, and real estate consulting.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | Dee Divine Propinfra",
    description:
      "Find comprehensive answers to questions about DDJAY plots in Gurgaon, HARERA legal compliance, plot loans, booking process, stamp duty, and real estate consulting.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <main className="pt-24 bg-[#f8f9fa] min-h-screen text-[#0c0d12] font-sans">
      <FaqContent />
    </main>
  );
}
