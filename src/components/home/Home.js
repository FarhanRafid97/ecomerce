import { Flex, useColorModeValue, Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import MenProduct from '../product/Men/MenProduct';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './carousel/Carousel';
import { getDataProduk } from '../../globalState/actions/produk';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const menCloth = data?.filter((data) => data?.category === "men's clothing");

  useEffect(() => {
    dispatch(getDataProduk());
  }, [dispatch]);

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex
      height="100vh"
      minWidth="100%"
      bg={bgColor}
      padding="0"
      bg="gray.300"
      flexDirection="column"
      rowGap="15px"
    >
      <Navbar />
      <Carousel />
      <MenProduct menCloth={menCloth} />
    </Flex>
  );
};

export default Home;
