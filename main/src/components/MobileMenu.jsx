import { useEffect } from "react";

{
  /* Responsive Menu animation and style for mobile version of the website */
}

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-scree opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a>
        <a
          href="#home"
          className="text-gray-300 hover:text-white transition-colors"
        >
          {" "}
          Home{" "}
        </a>
        <a
          href="#build"
          className="text-gray-300 hover:text-white transition-colors"
        >
          {" "}
          Build{" "}
        </a>
        <a
          href="#thoughts"
          className="text-gray-300 hover:text-white transition-colors"
        >
          {" "}
          Thoughts{" "}
        </a>
      </a>
    </div>
  );
};
