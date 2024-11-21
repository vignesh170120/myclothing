import { Cards, CartButton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/slices/products/api";
import { AppDispatch, RootState } from "../../redux/store";
import { addCart, selectProduct } from "../../redux/slices/products/reducer";
import { Wrapper } from "../../components/layoutcomponents/Wrapper";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

function Homes() {
  const navigate = useNavigate();
  const { productData, addToCart, searchValue } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const Fr = productData.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase()) );

  return (
    <Wrapper>
      {Fr.map((items) => (
        <Cards
          key={items.id}
          onClick={() => {
            dispatch(selectProduct(items.id));
            navigate(ROUTES.Products)
          }}
        >
          <div style={{ margin: "1rem 0rem" }}>
            <img
              style={{ width: "100%" }}
              src={items.images[0]}
              alt={items.title}
            />

            <h4>{items.title}</h4>

            <h5>Price: ${items.price}</h5>

            <CartButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const isItem = addToCart.some((item) => item.id === items.id);
                if (!isItem) {
                  dispatch(addCart([...addToCart, { ...items }]));
                }
              }}
            >
              Add to Cart
            </CartButton>
          </div>
        </Cards>
      ))}
    </Wrapper>
  );
}

export default Homes;
