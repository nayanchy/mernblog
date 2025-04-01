import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="./logo.png" alt="MERN Blog" className="size-8" />
        <span>MERN Blog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <MdClose className="size-6" />
          ) : (
            <RxHamburgerMenu className="size-6" />
          )}
        </div>
        <div
          className={`w-full h-[calc(100vh-4rem)] flex items-center justify-center absolute top-16 ${
            open ? "-right-0" : "-right-full"
          } transition-all ease-in-out`}
        >
          Items
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Most Popular</a>
        <a href="#">About</a>
        <a href="#">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
