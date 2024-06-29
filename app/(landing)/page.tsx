
import { AboutUs } from "@/components/About";
import { LandingHero } from "@/components/Hero";
import IconScroll from "@/components/IconScroll";
import { NavbarDemo } from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/Scroll";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  return (
    <div>
    <NavbarDemo />
    <LandingHero />
    <AboutUs />
    <HeroScrollDemo />
    <IconScroll />
    <Subscribe />
    </div>
  );
}
