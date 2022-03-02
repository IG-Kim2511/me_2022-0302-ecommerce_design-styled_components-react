import { FavoriteBorderOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


// 🍀css30.mixin문법
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

//   🧨css30.
  &:hover ${Info}{
    opacity: 1;
  }
`;

// 🧨js103
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

//  🧨css30.
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const Product = ({p_item}) => {
  return (
    <Container>
    {/* 🍀js103 Circle : 그냥 단순한 div도 img처럼 <~~/>로 닫을 수 있음 */}
        <Circle/>
        
        <Image src={p_item.img}/>
        <Info>
            <Icon>
                <ShoppingBagOutlined/>
            </Icon>    
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>    
        </Info>
    </Container>
  )
}

export default Product