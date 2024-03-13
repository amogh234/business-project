
import React, { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Textarea, Button, Heading, Form } from '@chakra-ui/react';
import { FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [enquiry,setEnquiry] = useState('');
  const [description,setDescription ] = useState('')

  const [errors, setErrors] = useState({});


  console.log(setDescription)

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!username) {
      errors.username = 'Username is required';
    }

    if(!enquiry){
      errors.enquiry = "This field cannot be empty"
    }
    if(!description){
      errors.description="This field cannot be empty"
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully');
      // You can send the form data to your backend or perform any other action here
    }
  };

  return (
    <div id='contact'>
    <Flex align="center" justify="center" minHeight="100vh" bgGradient="linear(to-r, #38b2ac, #6a7ff3)">
      <Box p={8} bg="white" borderRadius="lg" boxShadow="xl" textAlign="center" fontFamily="sans-serif" maxW="sm" marginTop="20px">
        <Heading as="h2" mb={4} color="gray.700">Contact Us</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="username" mb={4}>
            <FormLabel color="gray.700">Username</FormLabel>
            <Input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter your username" variant="filled" _hover={{ borderColor: 'teal.400' }} _focus={{ borderColor: 'teal.400' }} />
            {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel color="gray.700">Email address</FormLabel>
            <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email address" variant="filled" _hover={{ borderColor: 'teal.400' }} _focus={{ borderColor: 'teal.400' }} />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </FormControl>

          <FormControl id="enquiry" mb={4}>
            <FormLabel color="gray.700">enquiry</FormLabel>
            <Input  value={enquiry} onChange={e => setEnquiry(e.target.value)} type="text" placeholder="Enter your enquiry" variant="filled" _hover={{ borderColor: 'teal.400' }} _focus={{ borderColor: 'teal.400' }} />
            {errors.enquiry && <span style={{ color: 'red' }}>{errors.enquiry}</span>}
          </FormControl>

          <FormControl id="description" mb={4}>
            <FormLabel color="gray.700">Description</FormLabel>
            <Textarea  value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter your description" variant="filled" _hover={{ borderColor: 'teal.400' }} _focus={{ borderColor: 'teal.400' }} />
            {errors.descriptionl && <span style={{ color: 'red' }}>{errors.description}</span>}
          </FormControl>

          <Button colorScheme="teal" type="submit" _hover={{ bg: 'teal.500' }}>Submit</Button>
        </form>

        <Flex mt={4} justifyContent="center">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={32} color="#25D366" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} color="#1877F2" style={{ marginRight: '10px' }} />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope size={32} color="#EA4335" />
          </a>
        </Flex>
      </Box>
    </Flex>
    </div>
  );
};

export default ContactForm;
