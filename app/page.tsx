import FAQSection from "@/components/ui/FAQ/faq";
import Features from "@/components/ui/Features/Features";
import { Hero } from "@/components/ui/Hero/Hero";
import Intro from "@/components/ui/Intro/Intro";
import Testimonials from "@/components/ui/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Features />
      <Testimonials />
      <FAQSection />
    </main>
  );
}
