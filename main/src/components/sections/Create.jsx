import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

export const Create = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animated-text-gradient">
          Create Knowledge
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Share your wisdom, insights, and knowledge with the community. Create
          meaningful content that helps others learn and grow.
        </p>
        <HStack className="flex flex-col items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Start Writing
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg transition-all duration-300"
          >
            Upload Content
          </Button>
        </HStack>
      </div>
    </section>
  );
};
