import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Ram Shop</Navbar.Brand>
					</LinkContainer>

					<Nav className='ml-auto'>
						<LinkContainer to='/cart'>
							<Nav.Link>
								<i class='fas fa-shopping-cart'></i>
								&nbsp; Cart
							</Nav.Link>
						</LinkContainer>
						&nbsp;
						<LinkContainer to='/signin'>
							<Nav.Link>
								<i class='fas fa-user'></i>
								&nbsp; Sign In
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
