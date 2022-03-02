import React from 'react'
import styledComponents from 'styled-components'
import { data_categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styledComponents.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;


const Categories = () => {
  return (
    <Container>
    {
        data_categories.map((p_item)=>(
            <CategoryItem/>
        ))
    }

    
    </Container>
  )
}

export default Categories