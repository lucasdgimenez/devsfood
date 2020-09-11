import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux"
import {Container, 
        ProductArea, 
        ProductButtons, 
        ProductPhoto, 
        ProductInfoArea,
        ProductDetails, ProductButton,
        ProductQuantityArea, ProductName, ProductIngredients, ProductQuantity,
        ProductQtImage, ProductQttext, ProductPrice } from "./styled"

export default ({data, setStatus}) => {
  const dispatch = useDispatch()
  const [qt, setQt] = useState(1);

  useEffect(()=> {
    setQt(0)
  }, [data])

  const handleCancelButton = () => {
    setStatus(false);
  }

  const handleMinusQtd = () => {
    if(qt > 1) {
      setQt(qt - 1)
    }
  }

  const handlePlusQtd = () => {
    setQt(qt + 1)
  }

  const handleAddToCart = () => {
    // juntar as info e mandar isso pro recuder
    dispatch({type: 'ADD_PRODUCT', payload: {data:data, qt: qt}})
    setStatus(false) //fechar modal
  }
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image}/>
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage onClick={handleMinusQtd} src="/assets/minus.png"/>
              <ProductQttext>{qt}</ProductQttext>
              <ProductQtImage onClick={handlePlusQtd} src="/assets/plus.png"/>
            </ProductQuantity>
            <ProductPrice>
              R$ {(data.price * qt).toFixed(2)}
            </ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
      </ProductButtons>
    </Container>
  )
}