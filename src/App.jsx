
import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor,setBackgroundColor]=useState('');
  const changeColor=(color)=>{
    setBackgroundColor(color);
  }

  return (
    <>
      <div style={{width:'100%',height:'100vh',backgroundColor}}className='d-flex justify-content-center align-items-center'>
        <br />
        
        <h1 className='head1'>Background color Changer</h1>
        <br />
        <br />
        <br />
        <br />
        <div className='' >
          <button className='button' style={{marginRight:'12px'}} onClick={()=>changeColor('pink')}>pink</button>
          <button className='button' style={{marginRight:'12px'}} onClick={()=>changeColor('green')}>Green</button>
          <button className='button' style={{marginRight:'12px'}} onClick={()=>changeColor('yellow')}>Yellow</button>
          <button className='button' style={{marginRight:'12px'}} onClick={()=>changeColor('orange')}>Orange</button>

        </div>
      </div>

    </>
  )
}

export default App
