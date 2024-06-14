import PropertiesHeroSection from "./_components/lodge-hero-section";
import LodgesSection from "./_components/lodges-section";
import SearchSection from "./_components/property-search-section";

function LodgePage() {
  return (
    <main>
      <PropertiesHeroSection />
      <SearchSection />
      <LodgesSection />
    </main>
  );
}

export default LodgePage;
