import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import BackIcon from '../../../svgs/BackIcon';
import NextIcon from '../../../svgs/NextIcon';


const ProductImages = ({ selectedImg, images, selectImgHandler }) => {
  let slides = [];
  let previewImgs = [];
  if (images.length) {
    slides = images.map((image, idx) => {
      previewImgs.push(<div key={`preview-${image.id}${image.productId}`} className="img-preview"><img alt="" className={selectedImg.id === idx ? 'img-selected' : ''} src={image.url} /></div>);
      return (
        <Slide key={`slide-${image.id}${image.productId}`} className="carousel-slide" index={idx}>
          <div className='selected-img-container'>
            <Image className="selected-img" src={image.url} />
          </div>
        </Slide>
      );
    });
  }
  return (
    <div className="product-images-container">
      <CarouselProvider
        naturalSlideWidth={890}
        naturalSlideHeight={600}
        totalSlides={slides.length}
        currentSlide={selectedImg.id}
      >
        <Slider className="carousel-slider">
          {slides}
        </Slider>
        <div className="carousel-bottom">
          <ButtonBack className="carousel-button" onClick={() => selectImgHandler('back')}><BackIcon /></ButtonBack>
          <div className="carousel-preview">
            {previewImgs}
          </div>
          <ButtonNext className="carousel-button" onClick={() => selectImgHandler('next')}><NextIcon /></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default ProductImages;
