import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Cover from "../images/Cover.png"
import { Image, Text } from "@chakra-ui/react";
import webdev from "../images/developer.png"
import apdev from "../images/app-development.png"
import cloud from "../images/cloud.png"
const containerStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${Cover})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'overlay',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const conp = {
  fontSize: "20px", /* Adjust the font size as needed */
  lineHeight: "1.5",/* Adjust the line height for better readability */
  color: "light-white",
  fontFamily: "Dancing Script",
  fontWeight: "bold",
  margin: "20px",
  textAlign: "center"
}

const box_shadow = {
  width: "90% 45% 30% 20%",
  marginBottom: "20px",
  textAlign: "center",
  boxShadow: "lg",
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: "md",
  p: "4",
  margin: "10px"
}


const Content = () => {



  return (
    <>
      <Box

        style={containerStyle}
      >
        <Flex flexDirection="column">
          <Heading as="h1" size="2xl" mb="4">
            Leave IT to Us, Focus on Your Business.
          </Heading>
          <div class="container">
            <p style={conp}>Our Innovative Solutions Keep Your Business Running Smoothly. </p>
          </div>


        </Flex>
      </Box>
      <Flex justifyContent="space-around" flexWrap="wrap">
        <Box sx={box_shadow} maxW={400}>

          <Image src={webdev} alt="Image 1" w={100} h={100} ml={20} />
          <h1>website development</h1>
          <Text>Discover refined and elegant web design and development solutions designed to elevate your brand's online presence, expand your audience reach, and enhance customer service. Our expertise in crafting sophisticated websites ensures captivating user experiences, empowering your brand to stand out, attract new customers, and deliver exceptional service</Text>
        </Box>
        <Box sx={box_shadow} maxW={400}>
          <Image src={apdev} alt="Image 2" w={100} h={100} ml={20} />
          <h1>App development</h1>
          <Text>Unlock the potential of mobile technology with our versatile app development solutions. From native to hybrid and cross-platform apps, we cater to both consumer and corporate needs, ensuring seamless operations and enhanced user experiences."</Text>
        </Box>
        <Box sx={box_shadow} maxW={400}>
          <Image src={cloud} alt="Image 3" w={100} h={100} />
          <h1>custom software</h1>
          <Text>Tailored software solutions designed for your unique needs. From custom-built applications to specialized systems, we empower businesses with efficient operations and personalized experiences</Text>
        </Box>

      </Flex>
    </>
  );
};

export default Content;
