import { Purpose } from './Purpose';
import { Pricing } from './Pricing';

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative bg-black"
      >
        <div className="text-center z-10 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-jura font-bold mb-6 animated-text-gradient leading-tight">
            Thinking is what differentiates us from the animal kingdom, bringing
            us closer to the Gods' one.
          </h1>
          <p className="text-base sm:text-lg font-jura mb-6 text-white">
            Awareness is just the path for the future.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="/create"
            className="bg-gray-400 text-black py-3 rounded font-jura font-extrabold text-xl transition relative overflow-hidden hover:-translate-y-0.5 shadow-lg hover:bg-gradient-to-r hover:from-white hover:to-yellow-400 hover:transition-all hover:duration-600 text-center w-48"
          >
            Create
          </a>
          <a
            href="/read"
            className="bg-gray-400 text-black py-3 rounded font-jura font-extrabold text-xl transition relative overflow-hidden hover:-translate-y-0.5 shadow-lg hover:bg-gradient-to-r hover:from-white hover:to-yellow-400 hover:transition-all hover:duration-600 text-center w-48"
          >
            Read
          </a>
        </div>
      </section>
      <Purpose />
      <Pricing />
    </>
  );
};
