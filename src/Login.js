import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
  const navigate=useNavigate();
    const [a, seta] = useState([]);
    const [b, setb] = useState();
    const [c,setc]=useState([]);
    const [d,setd]=useState();
    const [z,setz]=useState([]);
    const num=(no)=>{
        let a=(no.target.value);
        seta(a);
        setb(a.length);
        
    }
    const num1=(no1)=>{
      let c=(no1.target.value);
      setc(c);
      
    } 
    const Submit=async ()=>{
        
            let userData={PhoneNumber:a, Password:c}
            try {
              console.log(userData)
              fetch("http://localhost:5000/listofusers")
              .then((res) => res.json())
              .then((json) => {
                  console.log(json)
                  setz(json);
                  console.log(z)
                  });
          for (let i=0; i<z.length; i=i+1){
            console.log(z[i].PhoneNumber)
                    if((a===z[i].PhoneNumber)&&(c===z[i].Password)){
                      console.log("Success");
                      navigate("/");
                      break;
                    }
                  else{
                    setd("*****Please Enter correct details*****");
                  }};
          
            }catch (error) {
              console.error('Error adding user:', error);
            }
        };
        
    
    return(
        <div className="log">
<ul className="log1">
  <li>
    <h2>
      LOGIN
      
    </h2><br/>
  </li>
  <li>
    <p className="logp">
      Get access to your Orders,<br/>
      Wishlist and Recommendations
    </p>
  </li>
  <li>
    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ01_cOjGMvqqTkveLLWihsNgtfOWNMXomH8LRRHh-aQDrxQGQN" width='200' height='150' className="logimg"></img>
  </li>
  </ul>
  <ul className="log2">
    <table>
      <tr>
        <td>
          Enter Phone Number
        </td>
        <td>
          <input type='text'value={a} onChange={num}></input>
        </td>
      </tr>
      <tr>
        <td>
          Enter Password
        </td>
        <td>
          <input type='Password'value={c} onChange={num1}></input>
        </td>
      </tr>
    </table>
    
    <li className="logsub">
    <button onClick={Submit} className="logbutton">Login</button>
    </li>
    <li className="logdisp">
    <em>{d}</em>
    </li>
    
</ul>
        </div>
    );
}
export default Login;


//if(b===10){
//    alert("Logged in Successfully");
//}
//if(b<=9){
//    alert("Enter valid number")
//} 