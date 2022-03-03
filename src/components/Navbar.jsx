
import React from 'react'
import styledComponents from 'styled-components'

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

// 🧨js237
import { mobile_786 } from '../responsive.js'


import './Navbar.css'
import { Link } from 'react-router-dom';

const Container = styledComponents.div`
  height:60px;

  position:sticky;
  top:0;
  

  z-index:10;

  /* 🧨js237 */
  ${mobile_786({ height: "50px"})}
  
`;

const Wraper = styledComponents.div`

padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

${mobile_786({ padding: "10px 0px" })}


`;

const Left = styledComponents.div`

flex: 1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;

${mobile_786({ display: "none" })}

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

${mobile_786({ width: "50px" })}

`;

const Center = styledComponents.div`
flex: 3;
text-align: center;

`;

const Logo = styledComponents.div`
font-weight: bold;

${mobile_786({ fontSize: "24px" })}

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

${mobile_786({ fontSize: "12px", marginLeft: "10px" })}

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

        <Center className='nav-router'>
          
          <span> <Link className='link' to="/">Home</Link>  </span>
          <span> <Link className='link' to="Login">Login</Link></span>
          <span> <Link className='link' to="Register">Register</Link> </span>
          <span> <Link className='link' to="Cart">Cart</Link> </span>
          <span> <Link className='link' to="ProductsList">ProductsList</Link> </span>
          <span> <Link className='link' to="ProductPage">ProductPage</Link>  </span> 
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