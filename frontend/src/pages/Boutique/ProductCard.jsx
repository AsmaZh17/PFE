import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="card">
        <div className="product-box">
          <div className="product-img">
            <img className="img-fluid" src={product.image} alt={product.name} />
            <div className="product-hover">
              <ul>
                <li><a href="cart.html"><i className="icon-shopping-cart"></i></a></li>
                <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="icon-eye"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="product-details">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <a href="product-page.html">
              <h3>{product.name}</h3>
            </a>
            <p>Regular Flare Fit Women's white Top</p>
            <div className="product-price">
              {product.price} <del>{product.oldPrice}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;