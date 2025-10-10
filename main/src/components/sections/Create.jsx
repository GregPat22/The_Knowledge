import React from 'react';
import {
  Button,
  HStack,
  Card,
  CardBody,
  Text,
  Textarea,
  Avatar,
  Field,
} from '@chakra-ui/react';
import lightbulbIcon from '../../assets/lightbulbIcon.png';

export const Create = () => {
  return (
    <section className="flex flex-col items-center justify-center py-4 px-2 sm:px-4 min-h-screen overflow-hidden">
      {/* Entire Creation Section */}
      <div className="flex flex-col 2xl:flex-row gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl items-center">
        {/* Knowledge Creation Section - Left Side */}
        <div
          id="creation"
          className="flex flex-col items-center flex-1 w-full 2xl:w-auto min-w-0"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center">
            Knowledge Creation
          </h1>

          {/* Single bordered container for both title and description */}
          <div className="border-gray-600 border-2 rounded-md p-3 sm:p-4 md:p-6 w-full max-w-2xl">
            {/* insert a form here */}
            <form className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full">
              {/* Title Section */}
              <Field.Root required>
                <Field.Label className="text-white text-xs sm:text-sm md:text-base">
                  Title <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  placeholder="Start typing..."
                  variant="subtle"
                  width="100%"
                  minHeight="50px"
                  maxHeight="100px"
                  resize="vertical"
                  overflow="hidden"
                  className="text-xs sm:text-sm md:text-base"
                />
                <Field.HelperText className="text-gray-300 text-xs">
                  Max 50 characters.
                </Field.HelperText>
              </Field.Root>

              {/* Description Section */}
              <Field.Root required>
                <Field.Label className="text-white text-xs sm:text-sm md:text-base">
                  Description <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  placeholder="Start typing..."
                  variant="outline"
                  width="100%"
                  minHeight="100px"
                  maxHeight="250px"
                  resize="vertical"
                  overflow="hidden"
                  className="text-xs sm:text-sm md:text-base"
                />
                <Field.HelperText className="text-gray-300 text-xs">
                  Max 4000 characters.
                </Field.HelperText>
              </Field.Root>
            </form>
          </div>
        </div>

        {/* Metadata Section - Right Side with Left Border */}
        <div className="flex flex-col items-center border-l border-gray-600 pl-3 sm:pl-4 md:pl-6 lg:pl-8 min-w-56 sm:min-w-64 md:min-w-72 lg:min-w-80 w-full 2xl:w-auto 2xl:flex-1 max-w-xs mt-3 sm:mt-4 md:mt-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center">
            Metadata
          </h1>
          <div className="text-gray-300 space-y-1 sm:space-y-2 w-full">
            {/* Add your metadata content here */}
            <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
              <div className="flex justify-between">
                <span className="text-gray-400">Category:</span>
                <span className="text-white">Philosophy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Author:</span>
                <span className="text-white">Anonymous</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Created:</span>
                <span className="text-white">Oct 9, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
