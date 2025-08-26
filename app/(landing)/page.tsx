import { HeroSection } from "./components/hero-section"
import { FeaturedProperties } from "./components/featured-properties"
import { FindPropertiesSection } from "./components/find-properties-section"
import { BecomeOwnerSection } from "./components/become-owner-section"

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white">

      <HeroSection />
      <FeaturedProperties />
      <FindPropertiesSection />
      <BecomeOwnerSection />
    </section>
  )
}
