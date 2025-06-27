import {Button, Stack} from "react-bootstrap";

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
      <Button onClick={qurantityMinusOne}>-</Button>
      {quantity}
      <Button onClick={quantityPlusOne}>+</Button>
    </Stack>
  );
}
