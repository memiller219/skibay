import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../components/Products/Products";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/products.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Products product={product}></Products>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
