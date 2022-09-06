import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { addProduct, removeProduct } from '../redux/action/action'

const Cart = () => {
  const apidata = useSelector((state) => state.productListReducer)
  const data = useSelector((store) => store)
  const dispatch = useDispatch()

  return (
    <div >
      <div className=' d-flex justify-content-center  text-center'>
        {apidata.length >= 0 &&
          apidata.map((item, index) => {
            return (
              <Card key={index}  className=" ms-2 me-2 mt-2">
                <Card.Img variant="top" src={item.image} style={{height:"150px"}} />
              
              
                <ButtonGroup className='w-25 ms-5  bounded-pill text-center text-white '>
                <Button variant="outline-success" onClick={() => dispatch(addProduct())}>Add</Button>
                <Button variant="outline-success" onClick={() => dispatch(removeProduct())}>Remove</Button>
            
                </ButtonGroup>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <div>
                <p> Price:- {item.price}</p>
                <p>Category:- {item.category}</p>
               </div>
                  <Card.Text>
                   Discription {item.description}
                  </Card.Text>
                  <div className=' d-flex justify-content-between'>
                    <FaRegEdit className='icon' />
                    <FaTrashAlt className='icon' />
                  </div>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart