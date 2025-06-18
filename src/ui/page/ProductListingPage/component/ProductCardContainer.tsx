import { useEffect, useState } from "react";
import { GetAllProductDto } from "../../../../data/product.type";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import * as ProductApi from "../../../../api/ProductApi";

export default function ProductCardContainer() {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<
    GetAllProductDto[] | undefined
  >(undefined);

  // const navigate = useNavigate();

  const getAllProduct = async () => {
    try {
      const responseData = await ProductApi.getAllProduct();
      setGetAllProductDtoList(responseData);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Optionally, you can set an error state here to display an error message in the UI
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return getAllProductDtoList ? (
    <Container className="mt-3">
      <Row>
        {getAllProductDtoList.map((dto) => (
          <Col className="d-flex justy-content-center my-sm-2" key={dto.pid}>
            <ProductCard getAllProductDto={dto} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <Container className="mt-3">
      <Row>
        <Col className="d-flex justify-content-center">
          <p>Loading products...</p>
        </Col>
      </Row>
    </Container>
  );
}
