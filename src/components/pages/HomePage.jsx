import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrumn */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blog and Articles</span>
      </div>
      {/* Introduction */}
      <div className="flex items-center justify-between">
        {/* Titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            MacBlog is a modern blog created with MERN stack
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, similique? Natus id earum odio voluptatum, eos
            assumenda quibusdam consequatur.
          </p>
        </div>
        {/* Animated Buttons */}
        <Link to={"write"} className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story &#x2022;
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Share your idea &#x2022;
              </textPath>
            </text>
          </svg>
          <button className="absolute w-20 h-20 top-0 left-0 bottom-0 right-0 m-auto bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M18 6H10M18 6V14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
