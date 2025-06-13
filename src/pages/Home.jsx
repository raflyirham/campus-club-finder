import { Link } from "react-router";
import useTitle from "../hooks/useTitle";
import Chip from "../components/ui/Chip";
import StepCard from "../components/StepCard";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <div className="flex flex-row items-center h-dvh px-20 bg-[#f5f8fd] max-md:px-10 max-md:pb-20 max-md:pt-30 max-md:flex-col-reverse max-md:justify-center max-md:gap-10 max-sm:px-5">
        <div className="flex flex-col gap-5 w-1/2 max-md:w-full max-md:items-center">
          <Chip>🚀 The best platform to find clubs</Chip>

          <h1 className="text-5xl font-bold uppercase max-md:text-3xl max-md:text-center max-sm:text-2xl">
            Find a club <span className="text-primary">you will love</span> to
            join
          </h1>
          <p className="text-lg text-gray-500 max-md:text-base max-md:text-center max-sm:text-sm">
            ClubFinder offers a platform for you to find clubs on the campus
            that suits your preferences. Find everything you need to know about
            the clubs on the campus.
          </p>

          <Link
            to="/clubs"
            className="bg-primary text-white px-4 py-2 rounded-full w-fit font-bold text-sm cursor-pointer outline-none hover:bg-primary/80 active:scale-95 transition-all duration-300 max-md:text-sm max-sm:text-xs"
          >
            Find Clubs
          </Link>
        </div>

        <div className="w-1/2 h-full">
          <img
            src="/images/person.png"
            alt="Hero"
            className="w-full h-full object-center"
          />
        </div>
      </div>

      <div className="flex flex-col px-20 py-30 gap-5 max-md:px-10 max-md:py-20 max-sm:px-5">
        <div className="flex flex-row gap-2">
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold max-md:text-2xl max-sm:text-xl">
            How it works
          </h2>
          <p className="text-gray-500 max-md:text-base max-sm:text-sm">
            Follow these 4 simple steps to find the club you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2">
          <StepCard
            step={1}
            title="Find Clubs"
            description="Search for clubs available on the campus."
          />
          <StepCard
            step={2}
            title="View the Club"
            description="View the club's details and information."
          />
          <StepCard
            step={3}
            title="Join the Club"
            description="Join the club and start your journey."
          />
          <StepCard
            step={4}
            title="Start Your Journey"
            description="Start your journey with the club."
          />
        </div>

        <div className="flex flex-col bg-primary w-full py-20 px-20 gap-4 rounded-lg mt-10 max-md:px-10 max-md:py-10 max-sm:px-5 max-sm:py-5">
          <h2 className="text-white text-3xl font-bold max-md:text-2xl max-sm:text-xl">
            Still Confused?
          </h2>
          <p className="text-white text-lg max-md:text-base max-sm:text-sm">
            Worry not! We are here to help you!
          </p>

          <Link
            to="/contact"
            className="bg-white text-primary px-4 py-2 rounded-full w-fit font-bold text-sm cursor-pointer outline-none hover:bg-white/90 active:scale-95 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-20 py-30 gap-5 bg-[#f5f8fd] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-5">
        <div className="flex flex-row gap-2">
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
          <div className="bg-primary w-[20px] h-[20px] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold max-md:text-2xl max-sm:text-xl">
            What our users say
          </h2>
          <p className="text-gray-500 max-md:text-base max-sm:text-sm">
            Hear from our users about their experience with ClubFinder.
          </p>
        </div>

        <TestimonialSection />
      </div>
    </>
  );
};

export default Home;
