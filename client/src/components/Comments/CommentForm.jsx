const CommentForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Comments</h1>
      <div className="flex flex-col gap-4">
        <textarea
          name=""
          id=""
          rows="8"
          placeholder="write a comment..."
          className="outline-none focus:ring-1 focus:ring-blue-800 bg-white w-full p-4 rounded-2xl"
        ></textarea>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-md self-end">
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
