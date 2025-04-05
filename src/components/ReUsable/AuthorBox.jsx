import { Link } from "react-router-dom";
import Image from "./Image";
import { SiFacebook, SiInstagram } from "react-icons/si";
const AuthorBox = () => {
  return (
    <div className="card-container">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Author</h2>
      <div className="flex items-center gap-8">
        <div className="size-12 aspect-square">
          <Image
            src="userImg.jpeg"
            alt="author"
            className="rounded-full object-cover size-full"
            w="48"
          />
        </div>
        <Link to="/author/username">
          <h1 className="text-lg font-medium">Admin</h1>
        </Link>
      </div>
      <p className="text-gray-400 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
      </p>
      <div className="flex gap-4 items-center">
        <Link>
          <SiFacebook className="size-6 text-blue-800" />
        </Link>
        <Link>
          <SiInstagram className="size-6 text-blue-800" />
        </Link>
        <Link></Link>
      </div>
    </div>
  );
};

export default AuthorBox;
