import React, { Component } from 'react';

import Header from './Header/Header';
import ProductDetail from './ProductDetail/ProductDetail';
import RecommendedProducts from './RecommendedProducts/RecommendedProducts';
import Footer from './Footer/Footer';

import { getProducts, getProductImage } from '../services/productService';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: [],
      recommendedProducts: [],
      images: [],
      selectedProduct: null,
      selectedImg: null
    };
  }

  componentDidMount() {
    this.displayProducts();
  }

  displayProducts = async () => {
    const productResult = await getProducts();
    const products = productResult.data.map((item) => {
      return getProductImage(item.id)
        .then((res) => Object.assign({ imgURLs: res.data }, item))
        .catch((err) => console.log(err));
    });
    Promise.all(products).then((values) => {
      this.setState({
        loading: false,
        products: values,
        recommendedProducts: values.slice(1, values.length),
        images: values[0].imgURLs,
        selectedProduct: values[0],
        selectedImg: { id: 0, data: values[0].imgURLs[0] }
      });
    });
  }

  updateSelectedProduct = (selectedProduct) => {
    const { products } = this.state;
    const recommendedProducts = products.filter((product) => product.id !== selectedProduct.id);

    this.setState({
      recommendedProducts,
      images: selectedProduct.imgURLs,
      selectedProduct,
      selectedImg: { id: 0, data: selectedProduct.imgURLs[0] }
    });
  }

  selectImgHandler = (direction) => {
    const { selectedProduct, selectedImg } = this.state;
    let id = selectedImg.id;
    if (direction === 'next') {
      id += 1;
      if (selectedImg.id < selectedProduct.imgURLs.length) this.setState({ selectedImg: { id, data: selectedProduct.imgURLs[id] } })
    }
    if (direction === 'back') {
      id -= 1;
      if (selectedImg.id !== 0) this.setState({ selectedImg: { id, data: selectedProduct.imgURLs[id] } })
    }
  }

  render() {
    const { loading, images, selectedProduct, selectedImg, recommendedProducts } = this.state;
    return loading
      ? <div className="lds-dual-ring center-content" />
      : (
        <div id="main">
          <Header />
          <div className="divider" />
          <ProductDetail
            images={images}
            selectedProduct={selectedProduct}
            selectedImg={selectedImg}
            selectImgHandler={this.selectImgHandler}
          />
          <RecommendedProducts
            recommendedProducts={recommendedProducts}
            updateSelectedProduct={this.updateSelectedProduct}
          />

          <Footer />
        </div>
      )
  }
}


export default Main;
