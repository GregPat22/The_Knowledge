import React from 'react';
import myImage from '../../assets/ancient_dialogue.jpg';
import { RevealOnScroll } from '../RevealOnScroll';

export const Purpose = () => {
  return (
    <section
      id="purpose"
      className="min-h-screen flex items-center justify-center  relative bg-black"
    >
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row items-center justify-center text-xl">
          <div className="text-white text-center justify-center m-12">
            <h1 className="text-4xl text-left font-bold text-white mb-10">
              The purpose
            </h1>
            <p className="text-left mb-2">
              Ancients were usual to gather in large groups to share knowledge
              and ideas.
            </p>
            <p className="text-left">
              We are now living in a world where we can share those things with
              anyone, anywhere, anytime,
            </p>
            <p className="text-left">
              but we constantly search for something else then the knowledge
              itself.
            </p>
            <p className="mt-2 text-left text-amber-400">
              Connect with people, and find the knowledge.
            </p>
          </div>
          <div className="lg:shrink-0 min-w-80 w-full max-w-md">
            <img
              src={myImage}
              alt="Ancient dialogue"
              className="w-full h-auto min-w-80 mt-8 rounded-sm shadow-xl shadow-amber-200"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
