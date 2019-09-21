import React from 'react';
import faker from 'faker';
import Slider from 'react-slick';
import {Card, Container, Segment} from 'semantic-ui-react';


const settings = {
    dots: true,
    arrows: true,
    slidesToShow:5
  };

const cards = [0,1,2,3,4,5,6].map(i=>({
    image: faker.image.image(),
    header: faker.commerce.productName(),
    meta: `$ ${faker.commerce.price()}`,
    description: faker.commerce.productMaterial()
}));

const BestSellers = () => (
    <Container>
    <Slider {...settings}>
      {cards.map(card => (
        <Segment basic key={card.header}>
          <Card {...card} fluid />
        </Segment>
      ))}
    </Slider>
  </Container>
  )

  export default BestSellers;