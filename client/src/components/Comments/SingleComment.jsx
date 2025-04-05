import Image from "../ReUsable/Image";

const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl my-8">
      <div className="flex items-center gap-4">
        <div className="aspect-square size-12">
          <Image
            src="userImg.jpeg"
            className="rounded-full object-cover h-full"
            w="48"
          />
        </div>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe
          totam culpa error repellat similique, dolor dignissimos deleniti atque
          sapiente accusantium consectetur nam magni temporibus possimus
          doloremque quod explicabo numquam?
        </p>
      </div>
    </div>
  );
};

export default SingleComment;
