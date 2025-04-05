import { Link } from "react-router-dom";
import Image from "../ReUsable/Image";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="featured1.jpeg"
          alt="featured post"
          className="rounded-3xl object-cover"
          w="895"
        />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/posts?cat=web-design" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link
          to="/posts/1"
          className="text-xl lg:text-3xl font-semibold lg:font-bold hover:underline"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-between">
        {/* second */}
        <div className="lg:h-1/3 flex gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              w={"298"}
              src="featured2.jpeg"
              alt="featured post"
              className="object-cover rounded-3xl size-full"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <Link
              to="/posts/1"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="h-1/3 flex gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              w={"298"}
              src="featured3.jpeg"
              alt="featured post"
              className="object-cover rounded-3xl size-full"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/posts/1"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="h-1/3 flex gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              w={"298"}
              src="featured4.jpeg"
              alt="featured post"
              className="object-cover rounded-3xl size-full"
            />
          </div>

          <div className="w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/posts/1"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
