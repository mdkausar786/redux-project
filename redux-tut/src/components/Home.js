import React from 'react'
import iphone from '../assests/iphone12.png'
import '../style.css'


const Home = (props) => {
    console.warn("props", props);


    return (
        <div>

            <h1>Home component</h1>

            <div className='cart-wrapper item'>
                <div className='img-wrapper item'>
                    <img src={iphone} />
                </div>


                <div className='text-wrapper item'>
                    <span>I-PhonePrice:</span>
                    <span>$1000</span>

                </div>


                <div className='button-wrapper item'>
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: 'I Phone 13' })}

                    >AddtoCart</button>
      
                    
                    <button className='remove-btn' 
                     onClick={() => props.removeToCartHandler()}

                    >Remove from Cart</button>

                </div>







            </div>
        </div>
    )
}

export default Home