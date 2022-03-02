import React from 'react'
import styledComponents from 'styled-components'

// 🥒js52
import { data_categories } from '../data'

import CategoryItem from './CategoryItem'

import { mobile_786 } from '../responsive'



const Container = styledComponents.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile_786({ padding: "0px", flexDirection:"column" })}

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