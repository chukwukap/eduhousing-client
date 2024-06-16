<<<<<<< HEAD
import Header from "./Header";

export default function Home() {
	return (
		<main className='min-h-screen bg-[#1A1A1A] text-white'>
			<Header />
		</main>
	);
=======
import HeroTextCarousel from "@/components/HeroTextCarousel";
import HeroSection from "./_components/hero-section";

function Home() {
  return (
    <main className="flex items-start flex-wrap w-full h-screen relative mb-12">
      <div className="">
        <HeroSection />
      </div>
    </main>
  );
>>>>>>> 94c964033467f201066fd572101d8af90430adee
}

export default Home;
