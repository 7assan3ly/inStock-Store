import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { getCatg } from '../../api';
import { Link } from 'react-router-dom';
import './NavCom.css'
import { useSelector } from 'react-redux';


const NavCom = () => {

    const [Category, SetCategory] = useState([])

    useEffect(() => {
        const fetchCatg = async () => {
            const Categories = await getCatg()
            SetCategory(Categories)

        }
        fetchCatg()
    }, [])


    const cartCount = useSelector(state=>state.cart.quantity)

    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className='siteName'>inStock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link className='navLink' to="/inStock-Store">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='navLink' to="/inStock-Store">Hot Deals</Link>
                            </Nav.Link>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                {Category.map((catg, i) => {
                                    return <NavDropdown.Item key={i}>
                                        <Link className='navLink' to={`/category/${catg}`}>{catg}</Link>
                                    </NavDropdown.Item>
                                })}
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 searchInput"
                                aria-label="Search"
                            />
                            <Button className='searchBtn' variant="outline-success">Search</Button>
                        </Form>
                        <Link to="/cart">
                            <div className="cartWrapper">
                                <span className="cartIcon" >&#x1F6D2;</span>
                                <span className='iconCount'>{cartCount}</span>
                            </div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavCom