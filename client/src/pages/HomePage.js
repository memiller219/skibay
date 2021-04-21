import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../components/Products/Products'
import products from '../products'

const HomePage = () => {
    return (
        <>
            <h1>
                Latest Products
            </h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product}></Products>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage
