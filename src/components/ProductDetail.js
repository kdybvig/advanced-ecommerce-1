import React from 'react';

const ProductDetail = props => {
    const {price, name, description, reviews, rating} = props.product;
    const starsJSX = [];
    for (let i=0; i< 5; i++) {
        if(i< rating) {
            starsJSX.push(<span className="glyphicon glyphicon-star"></span>)
        } else starsJSX.push(<span className="glyphicon glyphicon-star-empty"></span>)

    }
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">{price}</h4>
                                <h4><a href="#">{name}</a>
                                </h4>
                                <p>{description}</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">{reviews} reviews</p>
                                <p>
                                    {starsJSX}
                                </p>
                            </div>
                        </div>
                    </div>

    )
}

export default ProductDetail