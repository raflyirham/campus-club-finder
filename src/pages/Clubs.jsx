import { useEffect, useState } from "react";
import clubs from "../data/clubs";
import ClubCard from "../components/ClubCard";
import useTitle from "../hooks/useTitle";

const Clubs = () => {
  useTitle("Clubs");

  const [data, setData] = useState(null);
  const [viewType, setViewType] = useState("grid");
  const [sortBy, setSortBy] = useState("asc");

  const sortAsc = (value) => {
    return value.sort((a, b) => a.name.localeCompare(b.name));
  };

  const sortDesc = (value) => {
    return value.sort((a, b) => b.name.localeCompare(a.name));
  };

  const handleSortData = (e) => {
    const value = e.target.value;
    setSortBy(value);
    if (value === "asc") {
      setData(sortAsc(data));
    } else {
      setData(sortDesc(data));
    }
  };

  const handleViewTypeChange = (e) => {
    const value = e.target.value;

    setViewType(value);
  };

  useEffect(() => {
    setData(sortAsc(clubs));
  }, []);

  return (
    <div className="flex flex-col min-h-dvh gap-10 px-20 py-40 max-md:px-10 max-md:py-40 max-sm:px-5 max-sm:py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-primary font-bold max-md:text-2xl max-sm:text-xl">
          Clubs
        </h1>
        <p className="text-gray-500 max-md:text-base max-sm:text-sm">
          Find all the clubs on the campus.
        </p>
      </div>

      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="sortBy" className="text-gray-500">
            Sort By
          </label>
          <select
            id="sortBy"
            className="w-[300px] p-4 rounded-md border border-gray-300 outline-none max-md:w-full"
            value={sortBy}
            onChange={handleSortData}
          >
            <option value="asc">Name (A-Z)</option>
            <option value="desc">Name (Z-A)</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="viewType" className="text-gray-500">
            View Type
          </label>
          <select
            id="viewType"
            className="w-[300px] p-4 rounded-md border border-gray-300 outline-none max-md:w-full"
            value={viewType}
            onChange={handleViewTypeChange}
          >
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
        </div>
      </div>

      <div
        className={`gap-x-4 gap-y-8 ${
          viewType === "grid"
            ? "grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
            : "flex flex-col"
        }`}
      >
        {data?.map((club) => (
          <ClubCard
            key={club.id}
            id={club.id}
            name={club.name}
            image={club.image}
            shortDescription={club.shortDescription}
            type={viewType}
          />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
