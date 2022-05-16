import { Flex, useColorModeValue, Container } from '@chakra-ui/react';
import React from 'react';

import Carousel from './carousel/Carousel';

const Home = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex height="100vh" minWidth="100%" bg={bgColor} padding="0">
      {/* <Banner /> */}
      <Carousel />
    </Flex>
  );
};

export default Home;
