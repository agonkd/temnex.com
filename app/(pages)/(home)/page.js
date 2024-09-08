export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="hero relative h-screen w-full flex items-center justify-center text-center bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat">
        {/* Left Image */}
        <div className="hidden lg:block absolute left-20 top-1/2 transform -translate-y-1/2">
          <img
            src="images/char_1.png"
            alt="Character Left"
            className="w-85 h-auto object-cover"
          />
        </div>

        {/* Right Image - Mirrored */}
        <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
          <img
            src="images/char_1.png"
            alt="Character Right"
            className="w-85 h-auto object-cover transform scale-x-[-1]"
          />
        </div>

        {/* Center Content */}
        <div className="z-10 text-white px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-3 md:mb-4 font-nasalization leading-tight">
            Find the Perfect <br />
            <span className="text-3xl md:text-5xl block">
              <span className="text-sky-500">Freelancer for</span> Your Business
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-12">
            Work with talented people at the most affordable price to get the
            most out of your time and cost.
          </p>
          <div className="w-full max-w-xl mx-auto flex items-center space-x-2 bg-white text-black rounded-full p-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow bg-transparent text-black focus:outline-none"
            />
            <button className="bg-purple-700 text-white py-2 px-6 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden block">
        {/* Only Left Image will be displayed */}
        <div className="w-full flex justify-center mt-4">
          <img
            src="images/char_1.png"
            alt="Character Mobile"
            className="w-40 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
