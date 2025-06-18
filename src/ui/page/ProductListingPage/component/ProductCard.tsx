import { Button, Card } from "react-bootstrap";
import { GetAllProductDto } from "../../../../data/product.type";
import { Link } from "@tanstack/react-router";

type Props = {
  getAllProductDto: GetAllProductDto;
};

export default function ProductCard({ getAllProductDto }: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={getAllProductDto.imageUrl} />
      <Card.Body>
        <Card.Title>{getAllProductDto.name}</Card.Title>
        <Card.Text>
          ${getAllProductDto.price} <br />
          {getAllProductDto.hasStock ? "有貨" : "冇貨"}
        </Card.Text>
        <Link
          to="/product/$pid"
          params={{
            pid: getAllProductDto.pid?.toString() || "",
          }}
        >
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
