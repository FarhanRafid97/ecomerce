import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Flex, Image, Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { StarIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getDataProduk } from '../../globalState/actions/produk';
// Import Swiper <sty></sty>les
SwiperCore.use([Navigation, Pagination]);
const Carousel = ({ mobile }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getDataProduk());
  }, [dispatch, mobile]);
  console.log(mobile);

  return (
    <div className="wrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={mobile ? 1.2 : 4}
        navigation={mobile ? false : true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swipperJs"
      >
        <div className="wrapper">
          {data?.map((data, index) => (
            <SwiperSlide key={index} className="slide">
              <Box
                width="280px"
                height="400px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="0px 1px 8px rgb(125,125,125,0.25)"
                marginBottom="25px"
                bg="#fff"
                className="boxCarousel"
              >
                <Image
                  src={data?.image}
                  height="280px"
                  width="100%"
                  padding="25px 35px"
                  className="imageCarousel"
                />

                <Flex
                  padding="10px 8px"
                  height="100%"
                  flexDirection="column"
                  rowGap="3px"
                  alignItems="start"
                >
                  <Box
                    noOfLines={1}
                    fontSize="sm"
                    width="100%"
                    fontWeight="semibold"
                    textAlign="start"
                  >
                    {data.title}
                  </Box>
                  <Box>${data.price}</Box>
                  <Flex alignItems="center">
                    <StarIcon fontSize="xs" />
                    {` ${data.rating.rate}/${data.rating.count}`}
                  </Flex>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
