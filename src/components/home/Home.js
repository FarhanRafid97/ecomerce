import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../carousel/Carousel';

const Home = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex height="100vh" width="100%" bg={bgColor}>
      <Carousel />
    </Flex>
  );
};

export default Home;
