import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'

interface ProductCardInterface {
  hit?: boolean
  newProduct?: boolean
  bouquetOfDay?: boolean
  discount?: number
  price: number
  oldPrice?: number
  name: string
  img: StaticImageData
  id: string
}

const Card = styled.div`
  min-width: 150px;
  max-width: 100%;
  background: #fdfdfd;
  padding: 10px;
  padding-bottom: 30px;
  border-radius: 0px 20px 20px 20px;
`

const CardImageBlock = styled.div`
  height: 245px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`

const CardImage = styled(Image)`
  width: 100%;
  border-radius: 0px 10px 0px 0px;
`

const CardStocks = styled.div`
  position: absolute;
  left: -5px;
  top: 5px;
  width: 115px;
`

const CardStock = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 2px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 6px 6px 0px;
`

const CardDiscount = styled.div`
  width: 115px;
  height: 25px;
  background: #f1eb4c;
  border-radius: 6px 0px 0px 6px;
  position: absolute;
  bottom: 5px;
  right: -5px;
  color: #7ea048;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardProductName = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 50px;
`

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    flex-grow: 1;
  }
`
const CardOldPrice = styled.div`
  text-align: center;
  text-decoration-line: line-through;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #8e8d6f;
  margin-bottom: 5px;
`

const CardCurrentPrice = styled.div`
  color: #7ea048;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`

const ProductCard: React.FC<ProductCardInterface> = ({
  img,
  hit,
  bouquetOfDay,
  newProduct,
  discount,
  name,
  price,
  oldPrice,
}) => (
  <Card>
    <CardImageBlock>
      <CardImage src={img} />
      {(hit || newProduct || bouquetOfDay) && (
        <CardStocks>
          {hit && <CardStock style={{ background: '#FD4F79' }}>ХИТ ПРОДАЖ</CardStock>}
          {newProduct && <CardStock style={{ background: '#4AE950' }}>НОВИНКА</CardStock>}
          {bouquetOfDay && <CardStock style={{ background: '#FD984F' }}>БУКЕТ ДНЯ</CardStock>}
        </CardStocks>
      )}
      {discount && <CardDiscount>Скидка {discount}%</CardDiscount>}
    </CardImageBlock>
    <CardProductName>{name}</CardProductName>
    <CardBottom>
      <div>
        {oldPrice && <CardOldPrice>{oldPrice} сум</CardOldPrice>}
        <CardCurrentPrice>{price} сум</CardCurrentPrice>
      </div>
      <Button style={{ padding: '9px 30px', fontSize: 18 }}>Заказать</Button>
    </CardBottom>
  </Card>
)

export default ProductCard
