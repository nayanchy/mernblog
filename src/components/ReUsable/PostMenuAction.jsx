import { useState } from "react";
// import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { MdBookmark, MdBookmarkBorder, MdOutlineDelete } from "react-icons/md";

const PostMenuAction = () => {
  const [bookmarked, setBookmarked] = useState(false);
  console.log(bookmarked);
  return (
    <div className="card-container">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Actions</h2>
      <div
        className="flex items-center gap-2 cursor-pointer py-2 text-sm"
        onClick={() => setBookmarked((prev) => !prev)}
      >
        {!bookmarked ? (
          <MdBookmarkBorder size={20} />
        ) : (
          <MdBookmark size={20} />
        )}
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer py-2 text-sm">
        <MdOutlineDelete size={20} />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
