import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg  shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a href="#home" className="text-3xl font-stretch-75% text-white">
            <span className="text-white">THE KNOWLEDGE.</span>
          </a>
          {/* mobile menu */}
          <div
            className="w-7 h5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#build"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Build
            </a>
            <a
              href="#thoughts"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Thoughts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
