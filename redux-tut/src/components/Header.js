import React from 'react'
import '../style.css'
import cartimg from '../assests/cart.png'


const Header = (props) => {
    console.warn("Home",props);


    return (
        <div>

            <div className='addto-cart'>
                <img src={cartimg}/>
                <span className='cart-icon'>
                    {props.data.length}
                </span>

            </div>
        </div>
    )
}

export default Header