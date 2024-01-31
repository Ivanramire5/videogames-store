import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardsHorror.css';
import data from '../../Data/horror.json';
import React from 'react'
import { Link } from 'react-router-dom'

const CardHorror = () => {
    return (
        <div className='horrorCard'>
                {data.map(product => 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='cardHorrorBody'>
                        <Card.Title className='cardHorrorTitle'>
                            {product.nombre}
                        </Card.Title>
                        <Card.Text className='cardHorrorText'>
                            {product.description}
                        </Card.Text>
                        <Link to={product.url}>
                            <Button className="buttonHorror" variant="primary">Comprar</Button>
                        </Link>
                    </Card.Body>
                </Card>
                )}
        </div>
    )
}

export default CardHorror