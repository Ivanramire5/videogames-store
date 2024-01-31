import React from 'react'
import CardsShooters from '../CardsShooters/CardsShooters'
import '../../style/shooter.css'
const Shooters = () => {
  return (
    <div className='divShooter'>
      <h1 className='h1Shooter'>Shooter Category</h1>
      <CardsShooters />
    </div>
  )
}

export default Shooters