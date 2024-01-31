import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardsShooters.css';
import data from '../../Data/shooters.json';
import React from 'react'
import { Link } from 'react-router-dom'

const CardsShooters = () => {
    return (
        <div className='shooterCard'>
            {data.map(product => 
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className='cardshooterBody'>
                    <Card.Title  className='titleShooterCard'>
                        {product.nombre}
                    </Card.Title>
                    <Card.Text className='textShooterCard'>
                        {product.description}
                    </Card.Text>
                    <Link to={product.url}>
                        <Button className='buttonShooter'variant="primary">Comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
            )}
        </div>
    )
}

export default CardsShooters