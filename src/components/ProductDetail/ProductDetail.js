import React, { PureComponent } from 'react';

import ProductImages from './components/ProductImages';
import Details from './components/Details';


class ProductDetail extends PureComponent {
  render() {
    const { images, selectedProduct, selectedImg, selectImgHandler } = this.props

    return (
      <div className="product-detail-container">
        <ProductImages selectedImg={selectedImg} images={images} selectImgHandler={selectImgHandler} />
        <Details selectedProduct={selectedProduct} />
      </div>
    );
  }
}

export default ProductDetail;
