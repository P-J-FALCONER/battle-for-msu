import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class ImageGallery extends React.Component {

    render() {
        return (
            <div>
                <Carousel autoPlay interval="3000" transitionTime="500">
                    <div>
                      <img src="../img/spotlight_1.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_2.jpg" style={{width: '50%', height: '50%'  }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_3.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_4.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_5.jpg" style={{width: '60%', height: '60%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_6.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_7.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_8.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_9.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_10.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_11.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_12.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_13.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_14.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_15.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_16.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_1.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_17.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_18.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_19.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_20.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_21.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_22.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_23.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                    <div>
                      <img src="../img/spotlight_24.jpg" style={{width: '50%', height: '50%' }}/>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallery;
