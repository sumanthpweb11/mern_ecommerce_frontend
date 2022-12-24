import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  // alert(location);
  return (
    <>
      {/* CARD 1 */}
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="watch" />
            <img className="img-fluid" src="images/watch-1.avif" alt="watch" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multicoloured
            </h5>
            <ReactStars
              value="3"
              edit={false}
              count={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              commodi possimus voluptate veniam? Minima obcaecati in a nisi
              vitae consectetur, animi enim magnam explicabo? Placeat delectus
              eum aliquam accusantium perferendis.
            </p>
            ,<p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      {/* CARD 2 */}
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="watch" />
            <img className="img-fluid" src="images/watch-1.avif" alt="watch" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multicoloured
            </h5>
            <ReactStars
              value="3"
              edit={false}
              count={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              commodi possimus voluptate veniam? Minima obcaecati in a nisi
              vitae consectetur, animi enim magnam explicabo? Placeat delectus
              eum aliquam accusantium perferendis.
            </p>
            ,<p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
