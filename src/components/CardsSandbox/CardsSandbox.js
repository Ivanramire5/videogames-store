import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardsSandbox.css';
import data from '../../Data/sandbox.json';
import React from 'react'
import { Link } from 'react-router-dom'

const CardsSandbox = () => {
    return (
        <div className='sandboxCard'>
                {data.map(product => 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className='cardBody'>
                        <Card.Title  className='titleSandboxCard'>
                            {product.nombre}
                        </Card.Title>
                        <Card.Text className='textSandboxCard'>
                            {product.description}
                        </Card.Text>
                        <Link to={product.url}>
                            <Button className='buttonSandbox'variant="primary">Comprar</Button>
                        </Link>
                    </Card.Body>
                </Card>
                )}
            </div>
    )
}

export default CardsSandbox