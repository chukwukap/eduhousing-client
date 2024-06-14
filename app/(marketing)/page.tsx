import HeroTextCarousel from "@/components/HeroTextCarousel";

function Home() {
  return (
    <main className="flex items-start flex-wrap w-full h-screen relative mb-12">
      <div className="container">
        <div className="w-full lg:w-1/2 flex items-center flex-col">
          {/* <Header /> */}
          <div className="px-2 w-full mt-16">
            <h1 className="text-8xl lg:text-8xl font-bold">
              GET YOUR
              <br /> DREAM <br />
              LODGE
              <br /> WITH EASE
            </h1>
          </div>
          <HeroTextCarousel />
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src="/Hero_bg.jpg"
            className="object-cover w-full"
            alt="Hero Image"
          />
          <div className="w-5/6 h-20 bg-gray-400 flex items-center justify-center mx-auto">
            <p className="text-white bg-black py-1 px-6 rounded-xl">flat</p>
          </div>
        </div>
        <div className="w-full mx-auto text-center mt-12 px-6">
          <button className="font-semibold rounded-full hover:bg-gray-900 transition-colors duration-200 text-xl px-8 py-4 bg-black text-white">
            Click here to get started
          </button>
        </div>
      </div>
    </main>
  );
}
export default Home;
