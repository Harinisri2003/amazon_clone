import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
const [{basket},dispatch]=useStateValue();

  return (
    <div className='header'>
       <Link to='/'><img className='logo' src='https://s3-eu-west-1.amazonaws.com/cdn.webfactore.co.uk/sr_615777_large.png?1537558108'></img></Link> 
        <div className='searchInput'><input type='text' className='search_bar'></input>
        <SearchOutlinedIcon className='header_search_icon'/>
        </div>
        <div className='header_nav'>
           <Link to='/login'> <div className='headerOption'><span className='option_line_1'>Hello buddy</span><span className='option_line_2'>sign in</span></div></Link>
            <div className='headerOption'><span className='option_line_1'>orders &</span><span className='option_line_2'>returns</span></div>
            <div className='headerOption'><span className='option_line_1'>your</span><span className='option_line_2'>prime</span></div>
            <Link to='/checkout'>
            <div className='header-basket'><ShoppingBasketIcon/>
            <span className='option_line_2 header_count'>{basket?.length}</span>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Header