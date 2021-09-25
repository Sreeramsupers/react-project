import React from 'react';
import Products from '../../products';
import { Row, Col, ListGroup, Button, Image, ListGroupItem } from 'react-bootstrap';
import { Rating } from '../../components';
import { Link } from 'react-router-dom';

const ProductDetails = ({ match }) => {
	const product = Products.find((p) => p._id === match.params.id);
	return (
		<div>
			<Link to='/' className='btn btn-light'>
				<i className='fas fa-arrow-left'></i> &nbsp; Go Back
			</Link>
			<Row>
				<Col md={4}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={5}>
					<ListGroup variant='flush'>
						<ListGroupItem>
							<h3>{product.name}</h3>
						</ListGroupItem>
						<ListGroupItem>
							<Rating value={product.rating} text={`${product.numReviews} Reviews`} />
						</ListGroupItem>
						<ListGroupItem>Price : &#8377; {product.price}</ListGroupItem>
						<ListGroupItem>{product.description}</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={3}>
					<ListGroupItem>
						<Row>
							<Col>Status :</Col>
							<Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
						</Row>
					</ListGroupItem>
					<ListGroupItem className='d-grid gap-1'>
						<Button size='lg' type='button' className='p-3'>
							Add to Cart
						</Button>
					</ListGroupItem>
				</Col>
			</Row>
		</div>
	);
};

export default ProductDetails;
