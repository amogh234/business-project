import React, { useState } from 'react';
import {
  Flex,
  Box,
  Link,
  Heading,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex bg="teal.500" p={4} align="center" fontFamily="sans-serif">
      {/* Toggler */}
      <IconButton
        aria-label="Toggle Menu"
        icon={<HamburgerIcon />}
        onClick={handleToggle}
        display={{ base: 'block', md: 'none' }}
      />

      {/* Logo */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Image src="/path/to/logo.png" alt="Logo" boxSize="40px" />
      </Box>

      {/* Title */}
      <Heading as="h1" size="lg" letterSpacing="tight" ml={4} mr={8} color="white" fontFamily="heading">
        My Website
      </Heading>

      {/* Navigation Links */}
      <Flex align="center" justify="space-around" flex="1" display={{ base: 'none', md: 'flex' }}>
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
          Home
        </Link>
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
          About
        </Link>
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
          Services
        </Link>
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
          Contact
        </Link>
      </Flex>

      {/* Drawer for Mobile */}
      <Drawer placement="left" onClose={handleToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="teal.500" color="white">
          <DrawerCloseButton />
          <DrawerHeader fontFamily="heading">Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" justifyContent={'space-around'} h='50vh'>
              <Box>
                <Link color="white" mb={4} _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                  Home
                </Link>
              </Box>
              <Box>
                <Link color="white" mb={4} _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                  About
                </Link>
              </Box>
              <Box>
                <Link color="white" mb={4} _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                  Services
                </Link>
              </Box>
              <Box>
                <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                  Contact
                </Link>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;

