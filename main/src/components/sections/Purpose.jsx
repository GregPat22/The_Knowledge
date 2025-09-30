import React from 'react';
import myImage from '../../assets/ancient_dialogue.jpg';

export const Purpose = () => {
  return (
    <section
      id="purpose"
      className="min-h-screen flex flex-row items-center justify-left ml-36 relative bg-black"
    >
      <div className="items-center justify-center text-xl">
        <h1 className="text-4xl text-left font-bold text-white mb-10">
          The purpose
        </h1>

        <div className="text-white text-center justify-center">
          <p className="text-left mb-2">
            Ancients were usual to gather in large groups to share knowledge and
            ideas.
          </p>
          <p className="text-left">
            We are now living in a world where we can share those things with
            anyone, anywhere, anytime,
          </p>
          <p className="text-left">
            but we constantly search for something else then the knowledge
            itself.
          </p>
          <p className="mt-2 text-left text-amber-400">Find the knowledge.</p>
        </div>
        <div>
          <img
            src={myImage}
            alt="Ancient dialogue"
            className="w-full max-w-md mt-8 rounded-sm shadow-xl shadow-amber-200"
          />
        </div>
      </div>
    </section>
  );
};
