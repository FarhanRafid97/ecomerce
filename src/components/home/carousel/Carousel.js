import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import {
  Flex,
  Image,
  Box,
  Text,
  Container,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import dataCarousel from './dataCarousel';

// Import Swiper <sty></sty>les
SwiperCore.use([Navigation, Pagination]);
const Carousel = ({ mobile }) => {
  return (
    <Container
      maxW="100%"
      className="wrapper"
      padding="0"
      height={['50vh', '50vh', '50vh', '100vh']}
      backgroundPosition="bottom"
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination, Scrollbar]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper"
        effect="fade"
      >
        <div className="wrapper">
          {dataCarousel.map((data, index) => (
            <>
              <SwiperSlide className="slide" key={index * 2}>
                <Box
                  width="100%"
                  height="100%"
                  position="relative"
                  className="boxBg"
                  overflow="hidden"
                >
                  <Image
                    src={data.imageUrl}
                    width="100%"
                    className="imageCarousel"
                    backgroundPosition="top"
                    backgroundSize="cover"
                    height={['50vh', '50vh', '50vh', '100vh']}
                  />
                  <Flex
                    position="absolute"
                    marginLeft="auto"
                    color="gray.50"
                    className="boxTextCarousel"
                    textAlign="center"
                    flexDirection="column"
                    alignItems="center"
                    width="80%"
                  >
                    <Text
                      fontSize={['11px', '25px', '22px']}
                      fontWeight={['light', 'thin']}
                      color="white"
                    >
                      {data.title}
                    </Text>
                    <Text
                      fontSize={['18px', '25px', '35px']}
                      fontWeight="light"
                    >
                      {data.category}
                    </Text>
                    <Button
                      marginTop="15px"
                      borderColor="black"
                      bg="blackAlpha.300"
                      width={['100px', '200px']}
                      fontWeight="light"
                      color="white"
                      fontSize={['9px', '16px']}
                      borderRadius="3px"
                      height={['26px', '42px']}
                      border={['1px solid white', '2px solid white']}
                      _hover={{ bg: 'blackAlpha.600', transition: '0.5s' }}
                    >
                      EXPLORE MORE
                    </Button>
                  </Flex>
                </Box>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </Container>
  );
};

export default Carousel;
