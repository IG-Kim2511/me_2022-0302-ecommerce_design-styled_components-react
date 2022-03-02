

// 🦄자동완성 import

import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

import React, { useState } from 'react'
import styled from "styled-components";


// js28.
import {data_sliderItems} from '../data.js'




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

// 
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;

//   🥒js49
  left: ${(props) => props.p_direction === "left" && "10px"};
  right: ${(props) => props.p_direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;

//   🥒js48
  transform: translateX(${(props) => props.p_slideIndex * -100}vw);
`;


const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

// 🥒js48
  background-color: #${(props) => props.p_bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {


    // 🍀js48 slide show react
    const [slideIndex, setSlideIndex] = useState(0);

    // 🍀js49 
    const handleClick = (p_direction)=>{

        if (p_direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }

    }



  return (
    <Container>
        
        {/* 🥒js49 */}

        <Arrow p_direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>

        <Arrow p_direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>



        {/* 🥒js48 */}
        <Wrapper p_slideIndex = {slideIndex}>
        {/*🍀js28. map  🥒data.js */}
        {/*🍀js46.  p_bg: props의미함. styled-components로 보냄 */}

            {
                data_sliderItems.map((p_item) => (
                    <Slide p_bg={p_item.bg} key={p_item.id}>
                    
                        <ImgContainer>
                            <Image src={p_item.img} />
                        </ImgContainer>
            
                        <InfoContainer>

                            <Title>{p_item.title}</Title>

                            <Desc>{p_item.desc}</Desc>

                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))
            }        
        </Wrapper>        
     
     

    </Container>
  )
}

export default Slider