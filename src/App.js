import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import { addProduct, removeProduct } from './redux/action/action'
import { Button, Navbar, Container, Nav, NavDropdown, Form, Image } from 'react-bootstrap';
import { productList, searchProduct } from './redux/action/productAction';
import Cart from './Components/Cart';
import cart from './assets/cart.png';
const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((store) => store)


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">TestKart</Navbar.Brand>

          <Form className='d-flex' >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
              onChange={(e)=>dispatch(searchProduct(searchProduct(e.target.value)))}
            />
            <div className='position-relative'> <Image src={cart} style={{ width: "50px" }} />  </div>
            <spam className="position-absolute count rounded-pill">{data.productReducer}</spam>
          </Form>

        </Container>
      </Navbar>
      <Button onClick={() => dispatch(productList())}>GetProduct</Button>
      <Cart />

    </>
  )
}

export default App