import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading ...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">Please sign in</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a new post</h1>
      <form action="" className="flex-1 flex flex-col gap-6 mb-6">
        <button
          type="button"
          className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-fit"
        >
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-desing">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A short description"
          className="p-4 rounded-xl bg-white shadow-md"
        ></textarea>

        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 rounded-md self-end"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default Write;
