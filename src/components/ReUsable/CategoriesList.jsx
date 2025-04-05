import { useState } from "react";
import { BiChevronDown, BiChevronRight, BiHash } from "react-icons/bi";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Technology",
      count: 12,
      expanded: false,
      subcategories: ["Web Development", "AI", "Mobile Apps"],
    },
    {
      id: 2,
      name: "Design",
      count: 8,
      expanded: false,
      subcategories: ["UI/UX", "Graphic Design", "Typography"],
    },
    {
      id: 3,
      name: "Productivity",
      count: 5,
      expanded: false,
      subcategories: ["Time Management", "Tools", "Workflows"],
    },
    {
      id: 4,
      name: "Tutorials",
      count: 15,
      expanded: false,
      subcategories: ["Beginner", "Advanced", "Case Studies"],
    },
    {
      id: 5,
      name: "Reviews",
      count: 7,
      expanded: false,
      subcategories: ["Software", "Hardware", "Services"],
    },
  ]);

  const toggleExpand = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, expanded: !category.expanded }
          : category
      )
    );
  };

  return (
    <div className="card-container">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>

      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id} className="font-medium">
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => toggleExpand(category.id)}
            >
              <div className="flex items-center">
                {category.expanded ? (
                  <BiChevronDown size={18} className="text-gray-500 mr-2" />
                ) : (
                  <BiChevronRight size={18} className="text-gray-500 mr-2" />
                )}
                <span className="text-gray-700">{category.name}</span>
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>

            {category.expanded && (
              <ul className="pl-8 py-1 space-y-1">
                {category.subcategories.map((subcategory, index) => (
                  <li
                    key={index}
                    className="flex items-center py-1 px-3 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <BiHash size={14} className="mr-2 text-gray-400" />
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full py-2 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-md transition-colors flex items-center justify-center">
          View All Categories
        </button>
      </div>
    </div>
  );
};
export default CategoryList;
