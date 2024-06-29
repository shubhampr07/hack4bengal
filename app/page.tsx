
import { AboutUs } from "@/components/About";
import { LandingHero } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/Scroll";


export default function Home() {
  return (
    <div>
    <NavbarDemo />
    <LandingHero />
    <AboutUs />
    <HeroScrollDemo />
    </div>
  );
}
