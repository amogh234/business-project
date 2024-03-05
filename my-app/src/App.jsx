

import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import Navbar from './landing page/navbar'
import Content from './landing page/body';
import ExpertiseSection from './landing page/middlepage'



function App() {
  return (
    
     <ChakraProvider>
      

      <Navbar/>
      <Content/>
      <ExpertiseSection/>


      
    </ChakraProvider>
  );
}

export default App;
