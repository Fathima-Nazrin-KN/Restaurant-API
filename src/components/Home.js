
import React, { useEffect, useState } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
      
    const [restaurants,setRestaurants] = useState([])


    useEffect(() => {
      let fetchRestaurants = async () =>{
        let data = await fetch('./restaurants.json')
        .then((res) => res.json())
        .catch((err) => console.log(err))

      
        setRestaurants(data.restaurants);
      }
    
      fetchRestaurants()
    }, [])
    
    console.log(restaurants);
    
  return (
    <Container > 
        <Row>
          {
            restaurants && restaurants.map((restaurant) =>(
              <Col className='mt-3 h-200'  md={3} key={restaurant.id}>
               <Card style={{flex:1, backgroundColor:'#d6918f'}}>
               <Card.Img  variant="top" src={`${restaurant.photograph}`}/>
               <Card.Body>
                 <Card.Title>{`${restaurant.name}`}</Card.Title>
                 <Card.Text>
                  <br/><strong>Cuisine:{restaurant.cuisine_type}</strong>
                  <br/><strong>Adress:{restaurant.address}</strong>
                 </Card.Text>
                <Button as={Link} to={`./restaurant/${restaurant.id}`} variant="primary">More Details</Button>
              </Card.Body>
              </Card>
            </Col>

            ))
          }
        
           
        </Row>
    </Container>
  )
}

export default Home