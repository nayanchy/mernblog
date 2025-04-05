const FilterBox = () => {
  return (
    <div className="card-container">
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
        />
        Newest
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="popular"
          className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
        />
        Most Popular
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="trending"
          className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
        />
        Trending
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="oldest"
          className="appearance-none size-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
        />
        Oldest
      </label>
    </div>
  );
};

export default FilterBox;
