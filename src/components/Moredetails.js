import React, { useEffect, useState } from 'react'
import { Container, Image,Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../styles/moredetails.css'


function Moredetails() {

   const {id} = useParams();
   const [restaurants,setRestaurants] = useState([]);

  
   useEffect(() => {
    let fetchRestaurants = async () =>{
      let data = await fetch(`/restaurants.json`)
                .then((res) => res.json())
                .catch((err) => console.log(err))

        setRestaurants(data.restaurants);
    }
    fetchRestaurants()
   }, [])

   console.log(restaurants);

   let findRestaurants = restaurants.find((item) => item.id == id)

   console.log(findRestaurants);

  
  return (


    <Container className='ms-3'>
      
       <Row>
       
       {
        findRestaurants && 
         <Container>
          <Row style={{ width: 500,}}>
            <Col>
            <Image  style={{ height: 450}} className='mt-3 py' variant="top" src={`${findRestaurants.photograph}`}/>
            </Col>
            <Col className='info' >
             <br/>{findRestaurants.name}
             <br/><strong>Cuisine:{findRestaurants.cuisine_type}</strong>;
             <br/>Address:{findRestaurants.address}
             <br/>Near:{findRestaurants.neighborhood}
             <br/>Operating hours:{findRestaurants.operating_hours}
            
            </Col>
            
          </Row>
         </Container>
       
       } 
      
      </Row>
      
    </Container>
     
  )
}

export default Moredetails