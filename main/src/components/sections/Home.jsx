export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-black"
    >
      <div className="text-center z-10 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-saira font-bold mb-6 animated-text-gradient leading-tight">
          Thinking is what differentiates us from the animal kingdom, bringing
          us closer to the Gods' one.
        </h1>
        <p className="text-base sm:text-lg font-saira mb-6 text-white">
          Awareness is just the path for the future.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#building"
          className="bg-yellow-400 text-black py-3 px-6 rounded font-saira font-medium transition relative overflow-hidden hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:bg-clip-text hover:text-transparent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          Building Knowledge
        </a>
        <a
          href="#building"
          className="bg-yellow-400 text-black py-3 px-6 rounded font-saira font-medium transition relative overflow-hidden hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:bg-clip-text hover:text-transparent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          Reading Knowledge
        </a>
        <a
          href="#building"
          className="bg-yellow-400 text-black py-3 px-6 rounded font-saira font-medium transition relative overflow-hidden hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:bg-clip-text hover:text-transparent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          Managing Knowledge
        </a>
      </div>
    </section>
  );
};
