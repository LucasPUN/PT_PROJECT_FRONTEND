import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../../data/product.type";
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import * as ProductApi from "../../../../api/ProductApi";
import {useNavigate} from "@tanstack/react-router";
import LoadingContainer from "../../../component/LoadingContainer";

export default function ProductCardContainer() {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);

  const navigate = useNavigate({from: "/"});

  const getAllProduct = async () => {
    try {
      const responseData = await ProductApi.getAllProduct();
      setGetAllProductDtoList(responseData);
    } catch {
      navigate({to: "/error"});
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  if (!getAllProductDtoList) {
    return <LoadingContainer/>
  }

  return (
    <Container className="mt-3">
      <Row>
        {getAllProductDtoList.map((dto) => (
          <Col
            className="d-flex justify-content-center my-sm-2"
            key={dto.pid}
          >
            <ProductCard getAllProductDto={dto}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
