import PropertiesHeroSection from "./lodge-hero-section";
import LodgesSection from "./lodges-section";
import SearchSection from "./property-search-section";
import { ThemePanel } from "@radix-ui/themes";

function LodgePage() {
  return (
    <main>
      <PropertiesHeroSection />
      <ThemePanel>Theme</ThemePanel>
      <SearchSection />
      <LodgesSection />
    </main>
  );
}

export default LodgePage;
