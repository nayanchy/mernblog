import AuthorBox from "../ReUsable/AuthorBox";
import CategoryList from "../ReUsable/CategoriesList";
import PostMenuAction from "../ReUsable/PostMenuAction";
import SearchComponent from "../ReUsable/SearchBox";

const SinglePostSidebar = () => {
  return (
    <div className="h-max sticky top-8">
      <SearchComponent />
      <AuthorBox />
      <PostMenuAction />
      <CategoryList />
    </div>
  );
};

export default SinglePostSidebar;
