import { Link } from "react-router";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useTitle("404 Not Found");

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-5 px-20 max-md:px-10 max-sm:px-5">
      <h1 className="text-4xl text-primary font-bold max-md:text-2xl max-sm:text-xl">
        404 Not Found
      </h1>
      <p className="text-gray-500 max-md:text-base max-sm:text-sm">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-4 py-2 rounded-full w-fit font-bold text-sm cursor-pointer outline-none hover:bg-primary/80 active:scale-95 transition-all duration-300 max-md:text-sm max-sm:text-xs"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
