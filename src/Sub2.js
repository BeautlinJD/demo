import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { Mycontext } from './Mycontext';
import Menu1 from './Menu1';
import Menu2 from './Menu2';

function Sub2(){
    const location=useLocation()
    const {from2}=location.state
    const { text, setText } = useContext(Mycontext);
    const [b,setb]=useState();
    const [b1,setb1]=useState();
    const [cc,setcc]=useState(false);
    
    const fn1=()=>{
        let y=text
        for (let i1=0; i1<text.length; i1=i1+1){
            let c=y[i1].Name
            let m=b
            console.log(c,"text", m,i1)
            if (c===b){
                setcc(true)
                alert("This Product is already added to the cart")
                return
            }
        }
        if(b!==""){ 
            let a=text
            for (let j=0; j<from2.length; j=j+1){
                if (from2[j].Name===b){
                    a.push(from2[j])
                    setText(a)
                        //setText([...text,from1[j]])
                    console.log(b,"added" )
                    setb("")
                    break
                }
            }
        }
    }

    const fn2=()=>{
        let a=text
        if (text.length===0){
            for (let j=0; j<from2.length; j=j+1){
                if (from2[j].Name===b){
                    //setText([...text,from1[j]])
                    a.push(from2[j])
                    setText(a)
                    setb("")
                    break
                }
            }
        }
    }

    const call=(x)=>{
        let y=x.target.value
        setb(y);
    }

    useEffect(() => {
        let k=text.length>0?fn1():fn2()
         setb1(text.length)
     }, [b]);
    
    return(
        <div>
<div>
    <Menu1/>
</div>           
        <div className='bg1'>
{from2.map((x,y)=>(
    <div className='bg2'>
        <table>
            <tr>
                <td>
                    <img src={x.ProductImage} width='200' height='200' className='imgs1'></img>
                </td>
                <td className='spacing'>
                    <h3>
                        {x.Name}
                    </h3>
                    <p>
                        {x.Description}
                    </p>
                    <h5 className='rating'>
                        {x.Rating}<i className='fa fa-star'></i>
                    </h5>
                    <h5>
                        <i className='fa fa-rupee'></i>{x.Rate}
                    </h5>
                    <h5 className='discount'>
                        {x.Discount}
                    </h5>
                </td>
            </tr>
            <tr>
                <td>
                    <button className='cart' value={x.Name} onClick={call}>Add to Cart</button>
                </td>
            </tr>
        </table>
        
    </div>
))}
        </div></div>
    );
}
export default Sub2;

//useEffect(()=>{
  //  try{
    //    const storedData=localStorage.getItem('storeditems');
      //  if (storedData){
        //    setcart(JSON.parse(storedData));
 //       }
 //   }
  //  catch(e){
  //      setcart(null);
  //  }},[]);


  //cart.push(from2[i])
                //localStorage.setItem('storeditems',JSON.stringify(cart));
                //console.log(cart)