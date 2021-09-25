import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Products from '../../products';
import { ProductScreen } from '../';

const HomeScreen = () => {
	return (
		<>
			<Row>
				{Products.map((product) => (
					<Col key={product._id} md={3}>
						<ProductScreen product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
