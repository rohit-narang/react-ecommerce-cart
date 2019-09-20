import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../assets/images/1.png';
import Img2 from '../../assets/images/2.png';
import Img3 from '../../assets/images/3.png';

class OffersCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default OffersCarousel;