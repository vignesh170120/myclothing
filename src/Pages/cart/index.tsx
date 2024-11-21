import {
  CartCard,
  CartItemContainer,
  Check,
  DetailSide,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemsDetailsWrap,
  PlaceOrderButton,
  ProductSide,
} from "./styled";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  removeFromCart,
  selectProduct,
} from "../../redux/slices/products/reducer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { useState, useEffect } from "react";
import { Button, Modal } from "antd";

function Cart() {
  const dispatch = useDispatch();
  const { addToCart } = useSelector((state: RootState) => state.products);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const allItemIds = addToCart.map((item) => item.id);
    setSelectedItems(allItemIds);
    if (!allItemIds.length) {
      navigate(ROUTES.HOME)
    }
  }, [addToCart]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  const handleCheckboxChange = (item: any, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item.id]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
    }
  };


  const totalAmount = addToCart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum: number, item) => {
      const price = typeof item.price === "string" ? parseFloat(item.price) : item.price;
      return sum + price;
    }, 0);

  return (
    <CartItemContainer>
      <ProductSide>
        {addToCart.map((item) => (
          <CartCard
            key={item.id}
            onClick={() => {
              dispatch(selectProduct(item.id));
            }}
          >
            <Check
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={(e: any) => handleCheckboxChange(item, e.target.checked)}
            />
            <ItemImage
              src={item.images[0]}
              onClick={() => {
                dispatch(selectProduct(item.id));
                navigate(ROUTES.Products)
              }
              }
            />
            <ItemsDetailsWrap>
              <ItemName>{item.title}</ItemName>
              <ItemPrice>Price: ${item.price}</ItemPrice>
              <PlaceOrderButton onClick={() => handleRemove(item.id)}>Remove</PlaceOrderButton>
            </ItemsDetailsWrap>
          </CartCard>
        ))}
      </ProductSide>
      <DetailSide>
        <h5 style={{ color: "grey" }}>PRICE DETAILS</h5>
        <div
          style={{
            borderBottom: "1px solid grey",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Total MRP</p> <p>${totalAmount.toFixed(2)}</p>
        </div>
        <div
          style={{
            borderBottom: "1px solid grey",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h5>TOTAL AMOUNT</h5> <p>${totalAmount.toFixed(2)}</p>
        </div>
        <PlaceOrderButton
          style={{ width: "100%" }}
          background="#E93D67"
          onClick={() => setIsModalOpen(true)}
        >
          Place Order
        </PlaceOrderButton>
      </DetailSide>
      <Modal title="Basic Modal" footer={[
        <Button key="submit" type="primary" style={{ backgroundColor: "#E93D67", color: "white" }} loading={loading} onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setIsModalOpen(false);
          }, 3000);
        }}>
          Submit
        </Button>]} open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </CartItemContainer >
  );
}

export default Cart;