import React, {Component} from 'react';
import Header from './Header';
import '../App.css';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Carousel from './Carousel';
import Checkout from './Checkout';

class App extends Component {
    state = {
        products: [],
        cart: [],
        orderStatus: 0
    }

    addToCart = (id, name, price) => {
        const curCart = this.state.cart;
        const idIdx = curCart.findIndex(item => item.id === id);
        if (idIdx === -1) {
            curCart.push({id: id, name: name, price: price, quantity: 1});
        } else {
            curCart[idIdx].quantity ++;
            curCart[idIdx].price = Math.round((price + curCart[idIdx].price)*100)/100;

        }

        console.log(curCart);

        this.setState({
            cart: curCart,
            orderStatus: 1
        });
    }

    sendOrder = (order) => {
        fetch("http://localhost:3001/orders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({
                orderStatus: 2,
                cart: []
            })
        });
    }

    componentDidMount () {
        fetch('http://localhost:3001/products/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                products: json
            })
        })
    }
    render() {
        console.log('status', this.state.orderStatus)
        const itemsInCart = this.state.cart.reduce((acc, item) => acc + item.quantity, 0);

        return (
            <div className="App">
              <Header cartItems={itemsInCart}/>
          <div className="container">
      
              <div className="row">
      
                  <div className="col-md-3">
                      <p className="lead">Shop Name</p>
                      <div className="list-group">
                          <a href="#" className="list-group-item">Category 1</a>
                          <a href="#" className="list-group-item">Category 2</a>
                          <a href="#" className="list-group-item">Category 3</a>
                      </div>
                  </div>
      
                  <div className="col-md-9">
                      {/*<Carousel>*/}
                      <Carousel />
                      {/*</Carousel>*/}
                      <div className="row">
                          {/*<ProductDetail>*/}
                         {this.state.products.map((product, index) => {
                             return <ProductDetail product={product} key={index} handleClick={this.addToCart}/>
                         })}
                          {/*</ProductDetail>*/}
      {/*
                          <div className="col-sm-4 col-lg-4 col-md-4">
                              <h4><a href="#">Like this template?</a>
                              </h4>
                              <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                              <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                          </div>
      */}
                      </div>
                    <Cart cart={this.state.cart}/>
                    <br />
                    <hr />
                    <br />
                    <Checkout cart={this.state.cart} sendOrder={this.sendOrder} orderStatus={this.state.orderStatus}/>
                  </div>
      
              </div>
      
          </div>
         
          <div className="container">
      
              <hr/>
            <Footer />
          </div>
            </div>
          );
    }
    
}

export default App;
