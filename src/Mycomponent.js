import { useContext } from 'react';
import { Mycontext } from './Mycontext';
import {useState} from 'react';
function Mycomponent() {
  const { text, setText } = useContext(Mycontext);
  //const [x,setx] = useState([0]);
  //const num=(y)=>{
  //  let x=parseInt(y.target.value)
  //  setx(x)
  //}
  const add=()=>{
    let s=text.length>0?text[text.length-1]+1:0
    console.log(text.length)
    setText([...text,s])
    console.log(text)
  }
  return (
    <div>
      
      
      <button onClick={add}>Click me</button>

      {text.map((t)=>
        <h3>{t}</h3>
      )}
    </div>
  );
}

export default Mycomponent;
//<input type="text" value={x}  onChange={num}></input>