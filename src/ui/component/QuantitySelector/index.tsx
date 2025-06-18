import { Button, Stack } from "react-bootstrap";

type Props = {
  quantity: number;
  qurantityMinusOne: () => void;
  quantityPlusOne: () => void;
};

export default function QuantitySelector({
  quantity,
  qurantityMinusOne,
  quantityPlusOne,
}: Props) {
  return (
    <Stack direction="horizontal">
      <Button onClick={quantityPlusOne}>+</Button>

      {quantity}

      <Button onClick={qurantityMinusOne}>-</Button>
    </Stack>
  );
}
