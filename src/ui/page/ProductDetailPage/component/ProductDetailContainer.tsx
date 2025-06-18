import { Button, Container, Stack } from "react-bootstrap";
import mockData from "../response.json";
import QuantitySelector from "../../../component/QuantitySelector";
import { useState } from "react";
import { useParams } from "@tanstack/react-router";

export default function ProductDetailContainer() {
  const { pid } = useParams({ from: "/product/$pid" });

  const [quantity, setQuantity] = useState<number>(mockData.stock);

  const quantityMinusOne = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const quantityPlusOne = () => {
    if (quantity < mockData.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Stack gap={3}>
        <div>
          <img src={mockData.imageUrl} />
        </div>
        <div>
          <h1>{mockData.name}</h1>
        </div>
        <div>Price: ${mockData.price.toLocaleString()}</div>
        <div style={{ whiteSpace: "pre-line" }}>{mockData.description}</div>
        <Stack direction="horizontal">
          <QuantitySelector
            quantity={quantity}
            qurantityMinusOne={quantityMinusOne}
            quantityPlusOne={quantityPlusOne}
          />
          <Button variant="danger" className="ms-2" style={{ height: 40 }}>
            加入購物車
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
