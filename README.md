# Anatta Project

The scope of the project:
 - Get and display data from Anatta's API (https://anatta-demo-app.herokuapp.com/explorer/#/)
 - Implement a carousel for product images and recommended products
 - Create a responive app for all the viewports smaller screens, Ipad (Portrait & Landscape mode) & big screens.

## Getting Started

Install project dependencies

```bash
npm install
```
Run the app in dev mode

```bash
npm start
```

Deployed at 

## Choices/Assumptions

I structured the project to have one parent component that holds the state ```<Man />``` which renders 4 main child components ```<Header />```, ```<ProductDetail />```, ```<RecommendedProducts />```, and ```<Footer />```. 
 
State is held in ```<Main />``` in order to make the code more readable and maintainable. If this project were to get more complex (display more pages, use more components etc.) I would add Redux to manage the state but for now I felt like it wasn't necessary.

### Main
 
contains state

   ``` 
this.state = {
      products: [], // list of all products from the api
      recommendedProducts: [], // list of recommended products
      images: [], // list of all image urls from the selected product
      selectedProduct: null, // products that the user selected
      selectedImg: null // image user selected to form the images list
    };
```

There are 3 methods defined which are:

1. **displayProducts**
    
   async function that
   - gets all the products from the api
   - iterates through products and calls the api to get all of the product images
   - Set's state of products, recommendedProducts, images, selectedProducts and selectedImg

    This function gets called on componentDidMount

   Since the api doesn't return that much data I chose to grab all of the products and products' images. If the data set was larger and if there was an api call to get recommended products, then I would only grab enough data to be displayed.

2. **updateSelectedProduct**
 
    function that has ```selectedProduct``` passed as a parameter

    - creates a new ```recommendedProducts``` list by filtering through all of the products and only pushing to the list if it's not the same as the ```selectedProduct```
    - Set's state of ```recommendedProducts```, ```images```, ```selectedProduct```, and ```selectedImg```
 
3. **selectImgHandler**

     function that has ```direction``` passed as a parameter
     - used to check which image needs to be displayed depending on if the user clicked the next button or the back button
     - Set's state of ```selectedImg```


### Header

displays header

Since this is a presentational-only component I decided to make it a functional component.


### ProductDetail

props:  
- ```images``` - all images the user from a single products
- ```selectedProduct``` - product that user selected
- ```selectedImg``` - main image displayed
- ```selectImgHandler``` - function called when user selects an image to view

I made this a **PureComponent** in order to have performance improvements for the future. Since we have some simple props being passed I will be able to use shouldComponentUpdate.

Has 2 functional child components

1. **<ProductImages />**

   displays the carousel 

   props used are ```selectedImg```, ```images```, and ```selectImgHandler```
    
2. **<Details />**
  
   displays sizes, colors and adding product to bag
   
    props used is ```selectedProduct```

### RecommendedProducts

  props:
  
 - ```recommendedProducts``` - used to display recommended products inside carousel

 - ```updateSelectedProducts``` - used when user clicks on a product in the recommendedProduct's carousel


### Footer

displays footer (has features strip and page links)

functional component.
