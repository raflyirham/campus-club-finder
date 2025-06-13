import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 w-full border-t border-gray-300 px-20 py-20 gap-10 max-md:grid-cols-1 max-sm:px-10 max-sm:py-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-primary">ClubFinder</h1>
        <p className="text-sm">
          ClubFinder is a platform that helps you find the perfect club for you.
        </p>
        <p className="text-sm text-gray-500">
          &copy; 2025 ClubFinder. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-primary">Links</h1>
        <Link to="/" className="w-fit text-sm hover:underline">
          Home
        </Link>
        <Link to="/clubs" className="w-fit text-sm hover:underline">
          Clubs
        </Link>
        <Link to="/about" className="w-fit text-sm hover:underline">
          About
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-primary">Contact</h1>
        <p className="text-sm">
          Email:{" "}
          <a href="mailto:contact@clubfinder.com">contact@clubfinder.com</a>
        </p>
        <p className="text-sm">
          Phone: <a href="tel:+1234567890">+1234567890</a>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-primary">Follow Us</h1>
        <div className="flex flex-col gap-3">
          <a
            href="https://www.facebook.com/clubfinder"
            className="w-fit text-sm hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/clubfinder"
            className="w-fit text-sm hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/clubfinder"
            className="w-fit text-sm hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
