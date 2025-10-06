import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

export const Read = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animated-text-gradient">
          Read Knowledge
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover and explore the vast collection of knowledge articles,
          insights, and wisdom shared by our community.
        </p>
        <HStack className="flex flex-col items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Browse Articles
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg transition-all duration-300"
          >
            Search Knowledge
          </Button>
        </HStack>
      </div>
    </section>
  );
};
