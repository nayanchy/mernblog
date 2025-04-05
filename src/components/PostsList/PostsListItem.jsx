import { Link } from "react-router-dom";
import Image from "../ReUsable/Image";

const PostsListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/posts/1" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by </span>
          <Link to="/author/username" className="text-blue-800">
            Admin
          </Link>
          <span>On </span>
          <Link to="/posts?cat=web-development" className="text-blue-800">
            Web Development
          </Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto
          commodi voluptatum nostrum eligendi excepturi cumque architecto, eius
          tempore impedit omnis sunt laborum perferendis nesciunt dolorum
          sapiente harum aut optio?
        </p>
        <Link
          to="/posts/1"
          className=" text-blue-800 px-4 py-2 w-fit rounded-md ring-1 ring-blue-800 hover:bg-blue-800 hover:text-white transition-all ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostsListItem;
