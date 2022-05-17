import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Flex,
  useColorModeValue,
  Box,
  Image,
  Button,
  Text,
} from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

// import required modules

const MenProduct = ({ menCloth }) => {
  return (
    <>
      <Flex
        width="99%"
        height="100vh"
        bg="#BFBFBF"
        alignItems="center"
        margin="auto"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3300,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {menCloth?.map((data, index) => (
            <SwiperSlide key={index}>
              <Flex width="100%" height="100vh" margin="auto">
                <Flex
                  margin="auto"
                  width="50%"
                  height="70%"
                  padding="40px "
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  rowGap="15px"
                >
                  <Image
                    src={data?.image}
                    width="280px"
                    height="350px"
                    className="imageCarousel"
                    backgroundPosition="top"
                    backgroundSize="cover"
                  />
                  <Flex
                    color="gray.50"
                    textAlign="center"
                    flexDirection="column"
                    width="80%"
                    alignItems="center"
                  >
                    <Text
                      fontSize={['11px', '25px', '22px']}
                      fontWeight={['light', 'light']}
                      color="white"
                    >
                      {data.title}
                    </Text>
                    <Text
                      fontSize={['18px', '25px', '35px']}
                      fontWeight="light"
                    >
                      ${data.price}
                    </Text>
                    <Button
                      marginTop="15px"
                      borderColor="black"
                      bg="blackAlpha.700"
                      width={['100px', '200px']}
                      fontWeight="light"
                      color="white"
                      fontSize={['9px', '16px']}
                      borderRadius="3px"
                      height={['26px', '42px']}
                      border={['1px solid white', '2px solid white']}
                      _hover={{ bg: 'blackAlpha.900', transition: '0.5s' }}
                    >
                      BUY NOW
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <Flex width="100%" height="100vh" bg="red.300" margin="auto">
              tes
            </Flex>
          </SwiperSlide> */}
        </Swiper>
      </Flex>
    </>
  );
};

export default MenProduct;
