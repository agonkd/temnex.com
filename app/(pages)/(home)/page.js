import Card from "@/app/_components/utils/Card";

export default function Home() {
  const categories = [
    "Web Development",
    "Design",
    "Marketing",
    "Writing",
    "Business",
  ];
  const products = [
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
    {
      image: "images/card.jpg",
      category: "Web & App Design",
      title: "I will design modern websites in figma or adobe xd",
      userProfile: "images/user_pp.png",
      userName: "John Doe",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="hero relative h-screen w-full flex flex-col lg:flex-row items-center justify-center text-center bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat">
        {/* Left Image for Desktop */}
        <div className="hidden lg:block absolute left-20 top-1/2 transform -translate-y-1/2">
          <img
            src="images/char_1.png"
            alt="Character Left"
            className="w-81 h-auto object-cover"
          />
        </div>

        {/* Right Image for Desktop */}
        <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
          <img
            src="images/char_1.png"
            alt="Character Right"
            className="w-81 h-auto object-cover transform scale-x-[-1]"
          />
        </div>

        {/* Center Content */}
        <div className="z-10 text-white px-4 mt-12 lg:mt-0 lg:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 lg:mb-8 font-nasalization leading-tight">
            Find the Perfect <br />
            <span className="text-3xl md:text-5xl lg:text-6xl block">
              <span className="text-sky-500">Freelancer for</span> Your Business
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 lg:mb-12">
            Work with talented people at the most affordable price to get the
            most out of your time and cost.
          </p>

          <div className="w-full max-w-lg mx-auto flex items-center space-x-2 bg-white text-black rounded-full p-2 lg:p-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow bg-transparent text-black focus:outline-none px-4"
            />
            <button className="bg-purple-700 text-white py-2 px-6 rounded-full">
              Search
            </button>
          </div>

          <ul className="w-full flex items-center justify-around text-left mt-20">
            <li className="text-2xl font-nasalization hidden md:block">
              <span className="text-[#6E3CF5]">834 </span>M <br />
              <span className="text-sm font-sans">Total Freelancer</span>
            </li>
            <li className="text-2xl font-nasalization hidden md:block">
              <span className="text-[#6E3CF5]">834 </span>M <br />
              <span className="text-sm font-sans">Total Freelancer</span>
            </li>
            <li className="text-2xl font-nasalization hidden md:block">
              <span className="text-[#6E3CF5]">834 </span>M <br />
              <span className="text-sm font-sans">Total Freelancer</span>
            </li>
            <li className="text-2xl font-nasalization hidden md:block">
              <span className="text-[#6E3CF5]">834 </span>M <br />
              <span className="text-sm font-sans">Total Freelancer</span>
            </li>
          </ul>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden block mt-8">
          <img
            src="images/char_1.png"
            alt="Character Mobile"
            className="w-40 h-auto object-cover mx-auto"
          />
        </div>
      </div>

      <div className="container mx-auto p-16">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-8 text-center sm:text-left">
          {/* Left Side: Titles */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-5xl  font-nasalization">Popular services</h1>
            <p className="text-sm text-gray-500">
              Most viewed and all-time top-selling services
            </p>
          </div>

          {/* Right Side: Categories */}
          <ul className="flex sm:flex-wrap space-x-0 sm:space-x-3 overflow-x-auto sm:overflow-visible w-full sm:w-auto justify-start sm:justify-end scrollbar-hide">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`px-4 py-2 sm:px-4 sm:py-2 ${
                  index === 0 ? "bg-gray-100 text-gray-700" : "text-gray-500"
                } 
                rounded-full cursor-pointer transition-all duration-300 hover:bg-[#F4EDFB] hover:text-gray-900 min-w-full sm:min-w-auto sm:min-w-fit`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              category={product.category}
              title={product.title}
              userProfile={product.userProfile}
              userName={product.userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
