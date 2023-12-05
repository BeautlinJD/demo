import Menu1 from './Menu1';
import {useLocation,useNavigate} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Mycontext } from './Mycontext';

function Cart(){
    const location=useLocation()
    const { text, setText } = useContext(Mycontext);
    const navigate=useNavigate();
    const [t,sett] = useState();
    const [em,setem] = useState('');
    //const [storeditems,setstoreditems]=useState([]);
    const del=(item)=>{
        let d=(item.target.value);
        let s=text;
        s.splice(d,1);
        //localStorage.setItem('storeditems',JSON.stringify(s));
        setText(s);
        sett(text.length);
        console.log(t,"test");
        if (text.length===0){
            setem("Your Cart is empty!");
            console.log(em)
        }
    }
    
    useEffect(() => {
        if (text.length===0){
            setem("Cart is empty!");
            console.log(em)
        }
     }, []);
    
    const navi=()=>{
        navigate("/");
     }
    return(
        <div>
<div>
    <Menu1/>
</div>      
      
        <div  className='bg1'>
     {(text.length===0)?
     <div className='cartmt'>
        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width='250' height='200'></img>
        <h4 className='cartmtspc'>{em}</h4>
        <p className='cartmtspc1'>Add items to it now</p>
        <button className='snbutton' onClick={navi}>Shop Now</button>
        </div>
     :""}
            
<div className='bg4'>
{text.map((item,index)=>(

    <table className='top'>
        <tr >
            
            <td>
                <img src={item.ProductImage} width='100' height='100' className='imgs1'></img>
            </td>
            <td className='spacing'>
                <p>
                    {item.Description}
                </p>
                <h5>
                    <i className='fa fa-rupee'></i>{item.Rate}
                </h5>
            </td>
        </tr>
        
        
        <tr>
            <td>
                <button className='cart' value={index} onClick={del}>Remove</button>
            </td>
        </tr>    
    </table>
    
))}
</div></div></div>
    );
}
export default Cart;

<tr>
    <td>Quantity</td>
            <td>
                <input type='number' className='qtxtbox'></input>
            </td>
</tr>