
import React from 'react'
import styledComponents from 'styled-components'

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styledComponents.div``;
const Wraper = styledComponents.div``;
const Left = styledComponents.div``;
const Language = styledComponents.div``;
const SearchContainer = styledComponents.div``;
const Search = styledComponents.div``;
const Center = styledComponents.div``;
const Logo = styledComponents.div``;
const Right = styledComponents.div``;
const MenuItem = styledComponents.div``;


const Navbar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>
            <SearchContainer>
              <input placeholder='Search'/>
              <Search></Search>
            
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