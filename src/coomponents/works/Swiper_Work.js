import React, { useRef } from 'react'
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./work_styles.css";
import SwiperCore, { Pagination,Navigation } from 'swiper';
import Work_detail_1 from './details/Work_detail_1';
import Work_detail_2 from './details/Work_detail_2';
import Work_detail_3 from './details/Work_detail_3';
import Work_detail_4 from './details/Work_detail_4';

function Swiper_Work() {
  SwiperCore.use([Pagination,Navigation]);
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return(
    <Box className='swiper_works_box' boxShadow={'2xl'} rounded={'lg'} id="works">
      <Text className="swiper_works_title">Works</Text>
      <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={1} loop={true}
        loopFillGroupWithBlank={true} pagination={{"clickable": true }} navigation={true} className="mySwiper">
          <SwiperSlide>
            <Work_detail_1/>
          </SwiperSlide>
          <SwiperSlide>
            <Work_detail_2/>
          </SwiperSlide>
          <SwiperSlide>
            <Work_detail_3/>
          </SwiperSlide>
          <SwiperSlide>
            <Work_detail_4/>
          </SwiperSlide>
      </Swiper>
    </Box>
  )
}
export default Swiper_Work