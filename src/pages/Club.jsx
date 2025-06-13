import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import NotFound from "./NotFound";
import clubs from "../data/clubs";
import useTitle from "../hooks/useTitle";
import useUserData from "../hooks/useUserData";
import { formatDate, valueOrDefault } from "../utils";
import Chip from "../components/ui/Chip";

const Club = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const { getUserData, saveUserData } = useUserData();

  const club = clubs.find((club) => club.id === id);

  useTitle(valueOrDefault(club?.name, "Club"));

  useEffect(() => {
    getUserData().then((data) => {
      setUserData(data);
    });
  }, []);

  const isClubJoined = userData?.clubs.some((club) => club.id === id);

  const handleJoinClub = () => {
    const newUserData = { clubs: [...(userData?.clubs || []), club] };
    saveUserData(newUserData);
    setUserData(newUserData);
  };

  if (!club) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-dvh gap-10 px-20 py-40 max-md:px-10 max-md:py-40 max-sm:px-5 max-sm:py-32">
      <div className="flex flex-col gap-4">
        <Link
          to="/clubs"
          className="text-primary text-base w-fit hover:underline"
        >
          {"< Back"}
        </Link>
        <h1 className="text-4xl text-primary font-bold max-md:text-2xl max-sm:text-xl">
          Club Detail
        </h1>
      </div>

      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="flex flex-col gap-3 bg-white rounded-lg p-4 shadow-md min-w-[500px] max-md:min-w-full max-md:w-full">
          <div className="w-full h-[250px] bg-primary rounded-lg overflow-hidden">
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-gray-600 text-base">ID: {club.id}</h3>
            {isClubJoined && <Chip size="sm">Joined</Chip>}
          </div>
          <h2 className="text-2xl font-bold">{club.name}</h2>
          <p className="text-gray-500 text-sm">{club.description}</p>

          {!isClubJoined && (
            <button
              onClick={handleJoinClub}
              className="bg-primary text-white px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-primary/80 active:scale-95 transition-all duration-300"
            >
              Join Club
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 rounded-lg p-4 w-full">
          <h3 className="text-2xl font-bold text-primary">Events</h3>
          {club.events.length > 0 ? (
            <div className="flex flex-col gap-2">
              {club.events.map((event) => (
                <div
                  key={event.name}
                  className="w-full bg-white rounded-lg p-4 shadow-md"
                >
                  <h4 className="text-lg font-bold">{event.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {formatDate(event.date)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No events found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Club;
