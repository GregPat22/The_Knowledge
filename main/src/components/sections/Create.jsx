import React from 'react';
import { Button, HStack, Card, CardBody, Text, Avatar } from '@chakra-ui/react';
import lightbulbIcon from '../../assets/lightbulbIcon.png';

export const Create = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 px-4">
      {/* Entire Creation Section */}
      <div className="flex flex-row gap-8 w-full max-w-6xl">
        {/* Knowledge Creation Section - Left Side */}
        <div
          id="creation"
          className="flex flex-col items-center flex-1 rounded-md p-4 gap-4"
        >
          <h1 className="text-2xl font-bold text-white">Knowledge Creation</h1>

          <div className="flex flex-col items-center gap-4 mb-4">
            <Card.Root width="320px">
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src={lightbulbIcon} />
                  <Avatar.Fallback name="Knowledge" />
                </Avatar.Root>
                <Card.Title mt="2">Knowledge</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Edit</Button>
                <Button>Save</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </div>

        {/* Metadata Section - Right Side with Left Border */}
        <div className="flex flex-col border-l border-gray-600 pl-8 w-80">
          <h1 className="text-2xl font-bold text-white mb-4">Metadata</h1>
          <div className="text-gray-300">
            {/* Add your metadata content here */}
            <p>Category: Philosophy</p>
            <p>Author: Anonymous</p>
            <p>Created: Oct 9, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};
