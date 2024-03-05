import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';


const Content = () => {
  return (
    <Box
    backgroundImage="url('../images/cover.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundBlendMode="overlay"
      background="linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      fontFamily="sans-serif"
      textAlign="center"
    >
      <Flex flexDirection="column">
        <Heading as="h1" size="2xl" mb="4">
          About Our Company
        </Heading>
        <p>Your company description goes here...</p>
      </Flex>
    </Box>
  );
};

export default Content;
