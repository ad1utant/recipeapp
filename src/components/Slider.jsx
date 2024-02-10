import Carousel from "react-bootstrap/Carousel";
import '/src/styles/Slider.css'

function Slider(){
    return(
        <div className={' d-none d-sm-none d-md-block d-lg-block'}>
            <Carousel>
                <Carousel.Item>
                    <img className={'custom-height'} src={'/src/assets/slider1.jpg'}/>
                    <Carousel.Caption>
                        <h3>Recipe App</h3>
                        <p>Discover Delicious Recipes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={'custom-height'} src={'/src/assets/slider2.jpg'}/>
                    <Carousel.Caption>
                        <h3>Recipe App</h3>
                        <p>Cook Like a Pro with Our App</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={'custom-height'} src={'/src/assets/slider3.jpg'}/>
                    <Carousel.Caption>
                        <h3>Recipe App</h3>
                        <p>Explore Endless Culinary Creations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={'custom-height'} src={'/src/assets/slider4.jpg'}/>
                    <Carousel.Caption>
                        <h3>Recipe App</h3>
                        <p>Savor Every Bite with Our Recipes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider