import React from 'react'
import "./App.css"
import {Button, Form,Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from './action/action';
import { productName } from './action/product';


const App = () => {
  const mystate = useSelector((state)=>state.numberChange)
  const data = useSelector((state)=>state)
 const dispatch =  useDispatch()


console.log("data from api",data)
  return (
    <div className='App'>

        <div className='d-flex justify-content-center mt-5'>
          <Button className='btn btn-info' onClick={()=>dispatch(increment())}>+</Button>
          <Form.Control type="text" value={mystate} className="w-25 text-center" />
          <Button className='btn btn-danger' onClick={()=>dispatch(decrement())}>-</Button>
        </div>

        <div className=' w-50 m-auto mt-5'>
        <Button className='btn btn-danger' onClick={()=>dispatch(productName())}>poduct name</Button>

        </div>

 
        {
          data.ProductReducer.map((item,index)=>{
            return(
            <>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.brand}</td>
          <td><img src={item.image}/></td>
        </tr>
     
      </tbody>
    </Table>
            </>
            )
          })
        }

    </div>
  )
}

export default App