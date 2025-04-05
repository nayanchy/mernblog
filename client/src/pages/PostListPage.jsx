import { useState } from "react";
import PostsListItem from "../components/PostsList/PostsListItem";
import SearchComponent from "../components/ReUsable/SearchBox";
import CategoryList from "../components/ReUsable/CategoriesList";
import FilterBox from "../components/ReUsable/FilterBox";
import { CgClose } from "react-icons/cg";
const PostListPage = () => {
  const [open, setOpen] = useState();
  const handleSearchFilterClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={handleSearchFilterClick}
        className="bg-blue-800 text-white px-4 py-2 rounded-md md:hidden mb-4"
      >
        {open ? <CgClose /> : "Search and Filter"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } md:block w-full md:w-1/4 h-max md:sticky md:top-8`}
        >
          <SearchComponent />
          <FilterBox />
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
