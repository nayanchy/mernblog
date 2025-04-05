import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-4">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>

        <Link
          to="/posts?cat=web-development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Development
        </Link>
        <Link
          to="/posts?cat=artificial-intellegence"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Artificial Intellegence
        </Link>
        <Link
          to="/posts?cat=digital-marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Digital Marketing
        </Link>
        <Link
          to="/posts?cat=mobile-development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Mobile Developemnet
        </Link>
        <Link
          to="/posts?cat=robotics"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Robotics
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <BiSearch />
        <input
          type="text"
          placeholder="Search ..."
          className="bg-transparent w-20 outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategories;
