import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
     <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='google'></img>
     <div className='home_row'>
        <Product id={1} title='How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' ratings={3}/>
        <Product id={2} title='
The 4-Hour Work Week : Escape the 9-5, Live Anywhere and Join the New Rich' price={19.99} image='https://m.media-amazon.com/images/I/71DPD5QEZCL._SL1263_.jpg' ratings={4}/>
     </div>
     <div className='home_row'>
     <Product id={3} title='
Samsung Galaxy S23 FE 5G (Mint, 8GB, 128GB Storage)' price={30.99} image='https://m.media-amazon.com/images/I/71qGismu6NL._SL1500_.jpg' ratings={5}/>
     <Product id={4} title='Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating' price={25.99} image='https://m.media-amazon.com/images/I/61AHiYyu3ZL._SL1500_.jpg' ratings={5}/>
     <Product id={5} title='
OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass' price={10.99} image='https://m.media-amazon.com/images/I/51UhwaQXCpL._SL1500_.jpg' ratings={5}/>
     </div>
     <div className='home_row'>
     <Product id={6} title='Shining Diva Fashion Latest Gold Plated Kundan Pearl Stylish Fancy Wedding Necklace Jewellery Set for Women' price={29.99} image='https://m.media-amazon.com/images/I/71iogZvVGqL._UL1440_.jpg' ratings={5}/>
     </div>
     </div>
    </div>
  )
}

export default Home