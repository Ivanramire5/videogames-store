import React from 'react'
import CardsSandbox from '../CardsSandbox/CardsSandbox'
import '../../style/sandbox.css'
const Sandbox = () => {
  return (
    <div className='sandboxDiv'>
      <h1 className='sandboxH1'>Sandbox Category</h1>
      <CardsSandbox />
    </div>
  )
}

export default Sandbox