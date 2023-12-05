import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, React } from "react";
import { Mycontext } from "./Mycontext";
import './App.css';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Sample from './Sample';
function Main(){
  const [text, setText] = useState([]);
    return(
        <div>
<ul>
  <Mycontext.Provider value={{ text, setText }}>
  
  
        <Routes>
          <Route path="/Sub1" element={<Sub1/>}/>
          <Route path="/Sub2" element={<Sub2/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path='/' element={<Menu1/>}/>
        
        </Routes>
  </Mycontext.Provider>
</ul>

  </div>
    );
}
export default Main;

//"ProductImage":"",
//       "Name":"Book Shelf",
//        "Description":"gh",
//        "Rating":"",
//        "Rate":"Rs.78",
//        "Discount":""