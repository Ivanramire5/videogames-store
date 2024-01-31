import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardRpg.css';
import data from '../../Data/rpg.json';
import React from 'react'
import { Link } from 'react-router-dom'

const CardRpg = () => {
  return (
    <div>
      <div className='rpgCard'>
    {data.map(product => 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body className='cardRpgBody'>
            <Card.Title  className='cardRpgTitle'>
                {product.nombre}
            </Card.Title>
            <Card.Text className='textRpgCard'> 
                {product.description}
            </Card.Text>
            <Link to={product.url}>
              <Button className="rpgButton" variant="primary">Comprar</Button>
            </Link>
        </Card.Body>
    </Card>
    )}
</div>
    </div>
  )
}

export default CardRpg