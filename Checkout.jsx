import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket, user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='check_left'>
           <img className='check_add' src='https://images-na.ssl-images-amazon.com/images/G/01/Gateway/Events/2016/PrimeDay/LeadUp/Desktop/PD16_GW_en_3000x600_leadup._CB270052908_.jpg' alt='google'></img>
           <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='check_title'>Your shopping basket</h2>
             {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              ratings={item.ratings}
              />
             ))}
           </div>
        </div>
        <div className='check_right'>
           <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout