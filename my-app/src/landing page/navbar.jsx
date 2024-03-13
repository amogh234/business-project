import React, { useState } from 'react';
import logo from "../images/Assure.png";
import { Link as ScrollLink } from 'react-scroll';
import {
  Flex,
  Box,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  
  const scrollToContact = () => {
    setIsOpen(false); // Close the drawer


    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('contact').offsetTop,
        behavior: 'smooth'
      });
    }, 300); // Delay scrolling to ensure drawer closes smoothly
  };
  
  return (
    <Flex
      bgGradient="linear(to-r, #38b2ac, #6a7ff3)"
      align="center"
      fontFamily="Arial, sans-serif"
    >
      {/* Toggler */}
      <IconButton
        aria-label="Toggle Menu"
        icon={<HamburgerIcon />}
        onClick={handleToggle}
        display={{ base: 'block', md: 'none' }}
      />

      {/* Logo */}
      <Image src={logo} alt="Logo" height={20} width={200} ml={5} mt={2}/>

      {/* Navigation Links */}
      <Flex
        align="center"
        justify="space-around"
        flex="1"
        display={{ base: 'none', md: 'flex' }}
      >
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }} >
          Home
        </Link>
        <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }} >
          About
        </Link>
        <ScrollLink to="/Contact" smooth={true} duration={500} onClick={scrollToContact}>
          <Link  color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
            Contact
          </Link>
        </ScrollLink>
      </Flex>

      {/* Drawer for Mobile */}
      <Drawer placement="left" onClose={handleToggle} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bgGradient="linear(to-r, #38b2ac, #6a7ff3)" color="white">
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
                <Link to="/about" color="white" mb={4} _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                  About
                </Link>
              </Box>
              <Box>
              <ScrollLink to="/contact" smooth={true} duration={500} onClick={scrollToContact}>
                  <Link color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                    Contact
                  </Link>
                </ScrollLink>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
