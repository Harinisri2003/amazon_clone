import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,ratings}) {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    //remove the items
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id,
    })
  }
  return (
    <div className='CheckoutProduct'>
     <img className='checkP_image' src={image}></img>
     <div className='checkP_info'>
          <p className='checkP_title'>{title}</p>
          <p className='checkP_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='checkP_ratings'>
            {Array(ratings).fill()
            .map((_,i)=>(
                <p>⭐</p>
            ))}
          </div>
          <button className='checkP_btn' onClick={removeFromBasket}>remove from basket</button>
     </div>
    </div>
  )
}

export default CheckoutProduct