import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Content = () => {
  return (
    <Box
      backgroundImage="url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg')"
      backgroundSize="cover"
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
        <p>Your company description goes mere laude kdfjlsjdl</p>
      </Flex>
    </Box>
  );
};

export default Content;
