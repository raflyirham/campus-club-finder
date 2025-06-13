import { Link } from "react-router";

const ClubCardGrid = ({ id, name, image, shortDescription }) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-md"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">{shortDescription}</p>
      <Link
        to={`/clubs/${id}`}
        className="bg-primary text-white px-4 py-2 rounded-full w-fit font-bold text-sm cursor-pointer outline-none hover:bg-primary/80 active:scale-95 transition-all duration-300 max-md:text-sm max-sm:text-xs"
      >
        View Detail
      </Link>
    </div>
  );
};

const ClubCardList = ({ id, name, image, shortDescription }) => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white rounded-lg p-4 shadow-md w-full">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20"
      />
      <div className="flex flex-col gap-4 max-md:gap-3">
        <h2 className="text-lg font-bold max-md:text-base max-sm:text-sm">
          {name}
        </h2>
        <p className="text-gray-500">{shortDescription}</p>
        <Link
          to={`/clubs/${id}`}
          className="bg-primary text-white px-4 py-2 rounded-full w-fit font-bold text-xs cursor-pointer outline-none hover:bg-primary/80 active:scale-95 transition-all duration-300"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

const ClubCard = ({ id, name, image, shortDescription, type = "grid" }) => {
  if (type === "grid") {
    return (
      <ClubCardGrid
        id={id}
        name={name}
        image={image}
        shortDescription={shortDescription}
      />
    );
  }

  return (
    <ClubCardList
      id={id}
      name={name}
      image={image}
      shortDescription={shortDescription}
    />
  );
};

export default ClubCard;
