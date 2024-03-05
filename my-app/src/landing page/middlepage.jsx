import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const expertiseItems = [
  { name: 'React', imageSrc: '../images/react.png' },
  { name: 'Node.js', imageSrc: '../images/node.png' },
  { name: 'Java', imageSrc: '../images/java-image.jpg' },
];

const ExpertiseSection = () => {
  return (
    <Box p={8} bg="gray.100">
      <Heading textAlign="center" mb={8}>Our Expertise</Heading>
      <Flex justifyContent="space-between">
        {expertiseItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: '100px' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Flex direction="column" alignItems="center">
              <Image src={item.imageSrc}boxSize="100px" mb={4} />
              
            </Flex>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default ExpertiseSection;
