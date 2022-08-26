import React from 'react'
import { Button,Form } from 'react-bootstrap'
import "./App.css"
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './action/action';

const App = () => {

  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()

  return (
    <div className='App w-50'>
      <h3>Redux - App</h3>

      <div className='mt-5 d-flex justify-content-center'>
        <Button onClick={()=>dispatch(increment())}>+</Button>
        
        <Form.Control type="text" className='w-25' value={myState} />
        
        <Button onClick={()=>dispatch(decrement())} >-</Button>
      </div>
    </div>
  )
}

export default App