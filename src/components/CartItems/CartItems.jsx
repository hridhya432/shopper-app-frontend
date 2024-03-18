import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
    
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const cartItemQuantity = CartItems && CartItems[e.id] ? CartItems[e.id] : 0;

        if (cartItemQuantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItemQuantity}</button>
                <p>{e.new_price * cartItemQuantity}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>

        </div>
        <div className="cart-items-total-item">
            <p>Subtotal</p>
            <p>${0}</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr />
        <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${0}</h3>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      
      <div className="cartitems-promocode">
        <p>
            If you have  a promo code.Enter it here
        </p>
        <div className="cartitems-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default CartItems;