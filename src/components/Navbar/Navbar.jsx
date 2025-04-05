import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "../ReUsable/Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="MERN Blog" w={32} h={32} />
        <span>MERN Blog</span>
      </Link>
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
          className={`bg-white z-50 w-full h-[calc(100vh-4rem)] flex flex-col font-semibold gap-8 text-lg items-center justify-center absolute top-16 ${
            open ? "-right-0" : "-right-full"
          } transition-all ease-in-out`}
        >
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/popular">Most Popular</Link>
          <Link to="/about">About</Link>

          <SignedIn>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Logout 👋
              </button>
            </Link>
          </SignedIn>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/popular">Most Popular</Link>
        <Link to="/about">About</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
