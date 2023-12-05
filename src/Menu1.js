import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, React } from "react";
import Login from './Login';
import Signup from './Signup';
import { Mycontext } from "./Mycontext";
import Menu2 from './Menu2';
import './App.css'
function Menu1(){
    return(
        <div className='font'>
<ul className='one'>
  <li className='one1'>
    <b className='flipkart'><em>Flipkart</em></b><br/> <cite className='xplor'>Explore</cite> <b className='plus'><cite>Plus</cite><i className='fa fa-plus left'></i></b>
  </li>
  <li className='onesearch'>
    <div>
      <ul className='searchbar'>
        <li>
          <i className='fa fa-search right'></i>
        </li>
        <li>
          <input type="text" placeholder='Search for products, brands and more' className='textbox'></input>
        </li>
      </ul>
    </div>
  </li>
  <li className='oneg'>
    <i className='fa fa-gift right'></i><b className='store'>Become a seller</b>
  </li>
  <li className='one2'>
    <i className='fa fa-user-circle right'></i><b className='store2'>Sign in</b><i className='fa fa-angle-down left lftup store2'></i>
      <ul>
        <li>
          <Link to='/Signup' className='linktext'>New Customer? - Sign up</Link>
        </li>
        <li>
          <Link to='/Login' className='linktext'>Login</Link>
        </li>
      </ul>  
  </li>
  <li className='one3'>
    <Link to="/Cart" className='linktext'><i className='fa fa-shopping-cart right ryt'></i><b className='store1'>Cart</b></Link>
  </li>
  <li className='more'>
    <i className='fa fa-reorder'></i>
    <ul>
      <li className='mr'>
        Notification Preferences
      </li>
      <li className='mr'>
        Customer Care
      </li>
      <li className='mr'>
        Advertise
      </li>
      <li className='mr'>
        Download App
      </li>
    </ul>
  </li>
</ul>
<div>
  <Menu2/>
</div>

        </div>
    );
}
export default Menu1;