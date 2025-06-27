import {Button, Container, Stack} from "react-bootstrap";
import QuantitySelector from "../../../component/QuantitySelector";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "@tanstack/react-router";
import * as ProductApi from "../../../../api/ProductApi.ts";
import {ProductDetailDto} from "../../../../data/product.type.ts";
import LoadingContainer from "../../../component/LoadingContainer";
import {putCartItem} from "../../../../api/CartItemApi.ts";
import {LoginUserContext} from "../../../../context/loginUserContext.ts";

export default function ProductDetailContainer() {
  const loginUser = useContext(LoginUserContext);

  const {pid} = useParams({from: "/product/$pid"});
  const navigate = useNavigate({from: "/product/$pid"});

  const [quantity, setQuantity] = useState<number>(1);
  const [dto, setDto] = useState<ProductDetailDto | undefined>(undefined);

  const [isAddingCart, setIsAddingCart] = useState(false);
  const [isSucessAddedCart, setIsSucessAddedCart] = useState(false);

  const quantityMinusOne = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const quantityPlusOne = () => {
    if (quantity < dto!.stock) {
      setQuantity(quantity + 1);
    }
  };

  const getProductByPid = async () => {
    try {
      const responseData = await ProductApi.getProductByPid(pid);
      setDto(responseData);
    } catch {
      navigate({to: "/error"});
    }
  }

  useEffect(() => {
    getProductByPid();
  }, []);

  const handleAddToCart = async () => {
    if (loginUser === null) {
      navigate({to: "/login"});
    } else if (loginUser) {
      try {
        setIsAddingCart(true);
        await putCartItem(pid, quantity);
        setIsAddingCart(false);
        setIsSucessAddedCart(true);

        setTimeout(() => {
          setIsSucessAddedCart(false)
        }, 3000);

      } catch {
        navigate({to: "/error"});
      }
    }


  }

  if (!dto) {
    return <LoadingContainer/>
  }

  return (
    <Container>
      <Stack gap={3}>
        <div>
          <img src={dto.imageUrl}/>
        </div>
        <div>
          <h1>{dto.name}</h1>
        </div>
        <div>Price: ${dto.price.toLocaleString()}</div>
        <div style={{whiteSpace: "pre-line"}}>{dto.description}</div>
        <Stack direction="horizontal">
          <QuantitySelector
            quantity={quantity}
            qurantityMinusOne={quantityMinusOne}
            quantityPlusOne={quantityPlusOne}
          />

          {
            isSucessAddedCart
              ? (
                <Button
                  variant="success"
                  className="ms-2"
                  style={{height: 40}}
                  disabled
                >
                  加左啦！！
                </Button>
              ) : (
                <Button
                  variant="danger"
                  className="ms-2"
                  style={{height: 40}}
                  disabled={isAddingCart}
                  onClick={handleAddToCart}
                >
                  加入購物車
                </Button>
              )
          }

        </Stack>
      </Stack>
    </Container>
  );
}
