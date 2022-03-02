import React from 'react'
import styled from 'styled-components';
import { data_popularProducts } from '../data';
import Product from './Product';



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
  return (
    <Container>
        {
            data_popularProducts.map((p_item)=>(
                <Product p_item={p_item} key={p_item.id}/>
            ))
        }
    
    </Container>
  )
}

export default Products