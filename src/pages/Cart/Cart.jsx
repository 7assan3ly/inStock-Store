import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delProduct } from '../../redux/cartRedux'
import {Footer} from '../../components'
import './Cart.css'



const Cart = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const quantity = 1

    const handleClick = id => {
        dispatch(
          delProduct(id)
        )
      }

    return (
        <div className='cart'>
            <h1 className="cartTitle">Shopping Cart</h1>

            <div className="cartWrapper">
                <div className="cartDet">
                    {cart.products.length > 0 ? cart.products.map(product => (
                        <div className="cartProduct">
                            <img src={product.image} className='cProductImg' alt='' />
                            <div className="cProdutDet">
                                <p className="cProductName">{product.title.substring(0,40)}</p>
                                <p className="cProductPrice">${product.price}</p>
                            </div>
                            <button className="cProductDel" onClick={() => handleClick(product.id)}>X</button>
                        </div>
                    ))
                    : 
                    <h1 className='cartEmpty'> Your Cart is Empty </h1>
                    }

                </div>


                <div className="cartSummary">

                    <div className="cartSumm">
                        <h3 className="cSummaryTitle">Order Summary</h3>

                        <div className="cSummaryDet">
                            <div className="sumItem">
                                <p className="sumItemTitle">Subtotal</p>
                                <p className="sumItemPrice">${cart.total}</p>
                            </div>
                            <div className="sumItem">
                                <p className="sumItemTitle">Shipping estimate</p>
                                <p className="sumItemPrice">$0</p>
                            </div>
                            <div className="sumItem">
                                <p className="sumItemTitle">Tax estimate</p>
                                <p className="sumItemPrice">$0</p>
                            </div>
                        </div>

                        <div className="sumTotal">
                            <p className="sumTotalTitle">Order Total</p>
                            <p className="sumTotalPrice">${cart.total}</p>
                        </div>

                        <button className="checkOut">Check Out</button>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart