import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Arrow from '../assets/Arrow.svg';

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Container = styled.div`
width: 25vw;
height: 70vh;

@media (max-width: 70em){
    height: 60vh;
}

@media (max-width: 64em){
    height: 50vh;
    width: 30vw;
}
@media (max-width: 48em){
    height: 50vh;
    width: 40vw;
}
@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
    @media (max-width: 64em){
    width: 3rem;

    }
    @media (max-width: 30em){
    width: 2rem;

    }


}

`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
            color:'blue'
        }}
        scrollbar={{
            draggable:true
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Stone.png" alt="Stone" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Theo.png" alt="Theo" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Wolfman.png" alt="Wolfman" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Dexter.png" alt="Dexter" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Fierreman.png" alt="Fierreman" />   </SwiperSlide>
        <SwiperSlide>  <img width={500} height={400}  src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Rio.png" alt="Rio" />   </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel