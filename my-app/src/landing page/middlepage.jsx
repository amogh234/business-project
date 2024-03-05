import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import java from '../images/java.png';
import node from '../images/node.png';
import react from '../images/react.png'

const expertiseItems = [
  { name: 'React', imageSrc:react  },
  { name: 'Node.js', imageSrc: node },
  { name: 'Java', imageSrc: java },
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
              <Image src={item.imageSrc.default} boxSize="100px" mb={4} />
            </Flex>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default ExpertiseSection;
