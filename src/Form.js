import {useState} from 'react';


function Form(){
  
    const [data, setUsers]=useState();
    const [n,setn]=useState();
    const [d,setd]=useState();
    const [p,setp]=useState();
    const nm=((x)=>{
        let n=(x.target.value);
        setn(n);
        console.log(n)
    })
    const dn=((y)=>{
        let d=(y.target.value);
        setd(d);
        console.log(d)
    })
    const prc=((z)=>{
        let p=parseInt(z.target.value);
        setp(p);
        console.log(p)
    })
    const add1 =  () => {
        
        
            console.log('abc')
            fetch('http://localhost:4000/listofitems')
            .then(function(data) { 
                console.log(data) 
             }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ', 
              error.message);
             });
          
      };


        const add = async () => {
            let userData={name:n, description:d, price:p}
            try {
              console.log(userData)
              const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              });
            }catch (error) {
              console.error('Error adding user:', error);
            }
          };
    
    return(
<div>
    name<input type="text" value={n} onChange={nm}></input><br/>
    description<input type="text" value={d} onChange={dn}></input><br/>
    price<input type="text" value={p} onChange={prc}></input><br/>
    <button onClick={add}>Add Item</button><br/>
</div>
    );
}
export default Form;

//import { useContext } from 'react';
//import { Mycontext } from './Mycontext';
//const { text, setText } = useContext(Mycontext);