import AuthorBox from "../components/ReUsable/AuthorBox";
import CategoryList from "../components/ReUsable/CategoriesList";
import PostMenuAction from "../components/ReUsable/PostMenuAction";
import SearchComponent from "../components/ReUsable/SearchBox";

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
