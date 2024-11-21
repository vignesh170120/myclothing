import { useDispatch, useSelector } from 'react-redux';
import { ButtonContainer, BuyButton, BuyContainer,DetailSide,PriceTag,ProductDescription, ProductImage, ProductPageContainer, ProductSide, ProductTitle } from "./styled";
import { AppDispatch, RootState } from '../../redux/store';
import { Fragment } from 'react/jsx-runtime';
import { addCart } from '../../redux/slices/products/reducer';
import { useState } from 'react';
import { CartButton } from '../../components/ui-components/cartButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const/routes';
function Productpage() {
  const { increaseQuantity, selectedProduct, productData, addToCart } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()
  const Filterpr = productData.filter((items) => items.id === selectedProduct);
  const [isClicked ,setIsClicked]=useState(false);
  const navigate = useNavigate();

  return (
    <ProductPageContainer>
      {
        Filterpr.map((items, index) => (
          <Fragment key={index}>
            <ProductSide>
            <ProductImage src={items.images[0]} alt='image' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} />
            <ProductTitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              {items.title}
            </ProductTitle>
            </ProductSide>
            <DetailSide>
            <ProductDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
              {items.description}
            </ProductDescription>
            <PriceTag
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
             Price:  ${items.price}
            </PriceTag>
            <ButtonContainer>
              <BuyContainer>
                {/* <IncButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(quantity((increaseQuantity ?? 0) + 1))}
          >
            +
          </IncButton> */}

                {/* <DecButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(quantity((increaseQuantity ?? 0) - 1))}
          >
            -
          </DecButton> */}
              </BuyContainer>
              <BuyButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Buy Now clicked")}
              >
                Buy Now {increaseQuantity}
              </BuyButton>
              <CartButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { 
                  const isItem = addToCart.some((item)=> item.id === items.id );
                  if(!isItem){
                    dispatch(addCart([...addToCart, { ...items }])) ; 
                    setIsClicked(true)}
                    navigate(ROUTES.CART)
                  }
                  }
                disabled={isClicked}
              >
                Add to Cart
              </CartButton>
            </ButtonContainer>
            </DetailSide>
          </Fragment>
        )
        )}

    </ProductPageContainer>
  )
}


export default Productpage;
