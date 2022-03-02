import React from 'react'
import styledComponents from 'styled-components'

// 🥒js52
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
    {/* 🍀js52. props  to <CategoryItem/> */}
    {
        data_categories.map((p_item)=>(
            <CategoryItem p_item={p_item}/>
        ))
    }

    
    </Container>
  )
}

export default Categories