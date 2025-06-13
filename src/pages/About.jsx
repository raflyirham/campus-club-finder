import useTitle from "../hooks/useTitle";
import TechCard from "../components/TechCard";

const About = () => {
  useTitle("About");

  return (
    <>
      <div className="flex flex-col min-h-dvh gap-10 px-20 py-40 max-md:px-10 max-md:py-40 max-sm:px-5 max-sm:py-32">
        <div className="flex flex-col gap-20 max-md:gap-10">
          <h1 className="text-4xl font-bold text-primary">About</h1>

          <div className="flex flex-row justify-between items-center gap-10 max-md:flex-col-reverse">
            <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
              <h2 className="text-2xl font-bold text-primary">
                What is ClubFinder?
              </h2>
              <p className="text-gray-500">
                ClubFinder is a platform that helps you find the perfect club
                for you. We are a team of students who are passionate about
                helping you find the perfect club for you.
              </p>
            </div>

            <div className="w-1/2 max-md:w-full">
              <div className="w-full h-[500px] bg-primary rounded-lg overflow-hidden">
                <img
                  src="/images/about/illustration-1.jpg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-center gap-10 max-md:flex-col-reverse">
            <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
              <h2 className="text-2xl font-bold text-primary">
                Why use ClubFinder?
              </h2>
              <p className="text-gray-500">
                By using ClubFinder, you can find the perfect club for you in no
                time. If you face any issues, you can contact us and we will
                help you out.
              </p>
            </div>

            <div className="w-1/2 max-md:w-full">
              <div className="w-full h-[500px] bg-primary rounded-lg overflow-hidden">
                <img
                  src="/images/about/illustration-2.jpg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-10 max-md:flex-col-reverse">
            <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
              <h2 className="text-2xl font-bold text-primary">
                How to use ClubFinder?
              </h2>
              <p className="text-gray-500">
                To use ClubFinder, you can find the list of clubs available in
                the campus. You can also find the details of the club by
                clicking on the detail button.
              </p>
            </div>

            <div className="w-1/2 max-md:w-full">
              <div className="w-full h-[500px] bg-primary rounded-lg overflow-hidden">
                <img
                  src="/images/about/illustration-3.jpg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-20 py-40 bg-[#f5f8fd] max-md:px-10 max-md:py-40 max-sm:px-5 max-sm:py-32">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-primary">
            How we build ClubFinder
          </h2>
          <p className="text-gray-500">
            Find out about what technologies we used to build ClubFinder
          </p>
        </div>

        <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <TechCard
            name="React"
            description="React is a JavaScript library for building user interfaces. It is used to build the frontend of ClubFinder."
            image="/images/about/react.jpg"
          />
          <TechCard
            name="React Router"
            description="React Router is a library for routing in React. It is used to navigate between different pages of the application."
            image="/images/about/react-router.png"
          />
          <TechCard
            name="Vite"
            description="Vite is a build tool for modern web applications."
            image="/images/about/vite.jpg"
          />
          <TechCard
            name="Tailwind CSS"
            description="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
            image="/images/about/tailwind-css.png"
          />
        </div>
      </div>
    </>
  );
};

export default About;
