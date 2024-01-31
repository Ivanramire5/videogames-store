import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './IndiesCards.css';
import data from '../../Data/indies.json';
import React from 'react';
import { Link } from 'react-router-dom'

const CardsIndies = () => {
    return (
        <div className='indiesCard'>
            {data.map(product => 
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className='cardIndies'>
                    <Card.Title className='titleIndie'>
                        {product.nombre}
                    </Card.Title>
                    <Card.Text className='textIndies'>
                        {product.description}
                    </Card.Text>
                    <Link to={product.url}>
                        <Button className='indieButton' variant="primary">Comprar</Button>
                    </Link>
                </Card.Body>
            </Card>
            )}
        </div>
    )
    
}

export default CardsIndies