import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import useResponsive from "../hooks/useResponsive";
import { cn } from "../utils";

const Header = () => {
  const pathname = useLocation();
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      handleMenuClose();
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);

  const isActive = (path) => {
    return (
      pathname.pathname === path ||
      (pathname.pathname.includes(path) && pathname.pathname !== "/")
    );
  };

  return (
    <>
      <header className="flex flex-row items-center justify-center w-full fixed top-4 left-0 z-10 px-20 max-md:px-10 max-sm:px-5">
        <div className="flex flex-row items-center justify-between px-10 py-4 bg-white/20 shadow-sm w-full isolate ring-1 ring-black/5 backdrop-blur-sm rounded-full max-md:px-5 max-sm:px-3">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 max-md:text-xl max-sm:text-lg"
          >
            ClubFinder
          </Link>
          {!isMobile && (
            <div className="flex flex-row items-center gap-4">
              <Link
                to="/about"
                className={cn(
                  "w-fit",
                  isActive("/about") ? "text-primary font-bold" : ""
                )}
              >
                About
              </Link>
              <Link
                to="/clubs"
                className={cn(
                  "w-fit",
                  isActive("/clubs") ? "text-primary font-bold" : ""
                )}
              >
                Clubs
              </Link>
              <Link
                to="/contact"
                className={cn(
                  "w-fit",
                  isActive("/contact") ? "text-primary font-bold" : ""
                )}
              >
                Contact
              </Link>
            </div>
          )}
          {isMobile && (
            <button
              className="font-bold text-4xl text-primary cursor-pointer hover:text-primary/80 active:scale-95 transition-all duration-300"
              onClick={handleMenuOpen}
            >
              {"="}
            </button>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="flex flex-row w-full h-full fixed top-0 right-0 z-20">
          <div
            className="w-full h-full bg-black/50 z-10"
            onClick={handleMenuClose}
          ></div>
          <div className="flex flex-col w-full h-full px-4 py-8 gap-4 bg-white/20 shadow-sm isolate ring-1 ring-black/5 backdrop-blur-sm rounded-lg max-md:px-5 max-sm:px-3 z-20">
            <Link
              to="/about"
              className={cn(
                "w-fit",
                isActive("/about") ? "text-primary font-bold" : ""
              )}
              onClick={handleMenuClose}
            >
              About
            </Link>
            <Link
              to="/clubs"
              className={cn(
                "w-fit",
                isActive("/clubs") ? "text-primary font-bold" : ""
              )}
              onClick={handleMenuClose}
            >
              Clubs
            </Link>
            <Link
              to="/contact"
              className={cn(
                "w-fit",
                isActive("/contact") ? "text-primary font-bold" : ""
              )}
              onClick={handleMenuClose}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
