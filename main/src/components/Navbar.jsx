import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-sm shadow-lg border-b border-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a
            href="/"
            className="text-3xl font-saira text-white hover:bg-gradient-to-r hover:from-white hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:transition-all hover:duration-600"
          >
            THE KNOWLEDGE.
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
              href="/"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
            <a
              href="/create"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Create
            </a>
            <a
              href="/read"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
