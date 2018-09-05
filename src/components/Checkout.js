import React, {Component} from 'react';

class Checkout extends Component {
    state = {
        name: '',
        address: '',
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.sendOrder({
            name: this.state.name,
            address: this.state.address,
            products: this.props.cart
        })
    }

    render () {
        console.log('status',this.props.orderStatus)
        console.log('cart', this.props.cart)
        return (
            <div>
                {this.props.orderStatus === 2 && 
                    <p style={{fontWeight: 'bold'}}>Thank You For Your Order!</p>
                }
                {this.props.orderStatus === 1 &&
                    <form onSubmit={this.handleSubmit}>
                    <p>Name: <input required name="name" type="text" onChange={this.handleInputChange} /></p>
                    <p>Address: <input required name="address" type="text" onChange={this.handleInputChange} /></p>
                    <button type="submit">Checkout</button>
                </form>
                }    
            </div>
          )
    }  
}

export default Checkout