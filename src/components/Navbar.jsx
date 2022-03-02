
import React from 'react'
import styledComponents from 'styled-components'

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

// 🧨js237
import { mobile_786 } from '../responsive.js'


import './Navbar.css'

const Container = styledComponents.div`
  height:60px;

  /* 🧨js237 */
  ${mobile_786({ height: "50px"})}
  
`;

const Wraper = styledComponents.div`

padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const Left = styledComponents.div`

flex: 1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styledComponents.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

// 🦄input에 styled-components
const Input = styledComponents.input`
border: none;


`;

const Center = styledComponents.div`
flex: 1;
text-align: center;

`;

const Logo = styledComponents.div`
font-weight: bold;


`;

const Right = styledComponents.div`

flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styledComponents.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;

`;


const Navbar = () => {
  return (

    /* 🦄 styled-components에도 css중첩적용 가능 */
    <Container className='test'>
      <Wraper>
        <Left>
          <Language>
            <SearchContainer>
              <Input placeholder='Search'/>
              <SearchIcon/>
            
            </SearchContainer>
          </Language>
        </Left>

        <Center>
          <Logo>IG</Logo>
        </Center>
      
        
        <Right>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem>

          {/* 🍀 Badge */}
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wraper>    
    </Container>
  )
}

export default Navbar