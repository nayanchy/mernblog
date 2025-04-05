import { Link } from "react-router-dom";
import Image from "../components/ReUsable/Image";
import SinglePostSidebar from "../components/Sidebar/SinglePostSidebar";
import Comments from "../components/Comments/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex md:flex-row flex-col-reverse gap-8">
        <div className="lg:3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by </span>
            <Link className="text-blue-800">Admin</Link>
            <span> On </span>
            <Link to="/posts?cat=web-design" className="text-blue-800">
              Web Design
            </Link>
            <span className="text-gray-500"> 2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis at
            eos aut? Dicta animi, iure ex optio excepturi repellendus, voluptate
            dolore earum dolor in porro ipsum dolorum, quod veritatis similique.
          </p>
        </div>
        <div className="lg:w-2/5 md:hidden lg:block">
          <Image
            src="postImg.jpeg"
            className="rounded-2xl object-cover"
            w="600"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Blog Content */}
        <div className="md:w-3/4 lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur
            nisi soluta at ab repellat temporibus autem porro numquam.
            Consectetur quaerat pariatur tempore beatae labore. Consequuntur
            libero eos dignissimos ex.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            provident sit nisi eius velit perspiciatis praesentium rerum error
            consequuntur, voluptatem animi laborum accusamus delectus, magni
            laudantium. Non rem esse maxime?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nisi
            ea cum, recusandae, velit, tenetur dolorem provident labore libero
            itaque illo magnam. Impedit itaque unde quibusdam ipsa iusto
            laudantium explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eum labore
            aliquid dolore, consequatur veniam magnam eos quisquam, harum illo
            reprehenderit alias expedita amet vitae nostrum distinctio.
            Reprehenderit non recusandae laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quia quos
            explicabo laudantium adipisci unde, laboriosam veniam eveniet
            accusantium reprehenderit libero sequi aliquid officia deleniti eos
            praesentium provident cum ea nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nostrum, voluptas magni magnam eius blanditiis officiis? Ipsam
            corporis iure fuga! Iusto, exercitationem tempora debitis totam quas
            nemo sed non quaerat?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam aspernatur consectetur tempora modi sit
            amet iste corporis voluptatem. Impedit nobis mollitia autem laborum
            possimus vitae minima commodi accusantium officiis aliquid. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quod totam odit
            sit quasi incidunt dolorum laborum! Vel, ex perferendis blanditiis
            velit doloribus consectetur, ea quia, corrupti illum laborum
            asperiores incidunt.
          </p>
        </div>
        {/* Sidebar */}
        <div className="md:w-1/4">
          <SinglePostSidebar />
        </div>
      </div>
      <div className="w-3/4">
        <Comments />
      </div>
    </div>
  );
};

export default SinglePostPage;
