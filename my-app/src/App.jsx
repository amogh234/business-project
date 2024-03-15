import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './landing page/navbar';
import ContactForm from './landing page/contact';
import Content from "./landing page/body";

const App = () => {
  return (
    <ChakraProvider>
      <Router> {/* Use BrowserRouter */}
        <Routes>
          <Route path="/" exact element={<Navbar />} /> {/* Use element prop */}
          <Route path="/Contact" element={<ContactForm />} /> {/* Use element prop */}
        </Routes>
      </Router>
      <Content />
      <ContactForm />
    </ChakraProvider>
  );
};

export default App;
