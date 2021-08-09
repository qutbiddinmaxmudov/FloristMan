import React from 'react'
import styled from 'styled-components'

interface ProductCardInterface{
  hit?: boolean
  new?: boolean
  bouquetOfDay?: boolean
  sale?: number
  price: number
  oldPrice?: number
  name?: string
  
}

const Card = styled.div`
  width: 150px;
  max-width: 100%;
  background: #FDFDFD;
  padding: 10px;
  padding-bottom: 30px;
  border-radius: 0px 20px 20px 20px;
`

const CardImageBlock = styled.div`
  height: 245px;
  width: 100%;
  position: relative;
  
`

const ProductCard:React.FC<ProductCardInterface> = () => {
  return (
    <Card>
      <CardImageBlock>
        
      </CardImageBlock>
    </Card>
  )
}

export default ProductCard
