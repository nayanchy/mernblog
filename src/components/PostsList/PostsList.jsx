import PostsListItem from "./PostsListItem";

const PostsList = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
    </div>
  );
};

export default PostsList;
