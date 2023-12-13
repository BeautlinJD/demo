import { useState,React } from "react";
import { Link,useNavigate } from "react-router-dom";


function Signup(){
    const navigate=useNavigate();
    const [k,setk]=useState([]);
    const [l,setl]=useState();
    const [m,setm]=useState([]);
    const [n,setn]=useState();
    const [o,seto]=useState([]);
    const [r,setr]=useState();
    const [s,sets]=useState();
    const [t,sett]=useState();
    const no=(aa)=>{
        let k=(aa.target.value);
        setk(k);
        setl(k.length);
        console.log(k,l);
    }
    const no1=(a)=>{
        let m=(a.target.value);
        setm(m);
        setn(m.length);
        console.log(m,n)
    }
    const no2=(aaa)=>{
        let o=(aaa.target.value);
        seto(o);
    }

    const req=async ()=>{
        let userData={PhoneNumber:k, Password:m, ConfirmPassword:o}
if ((l===10)&&(o===m)&&(n>=8)){
        try {

          console.log(userData)
          const response = await fetch('https://beautlin.onrender.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(userData),
            
          });
        navigate("/");
        
          
        }catch (error) {
          console.error('Error adding user:', error);
        }}

        if (l<=9){
            setr("*****Please enter valid Phone Number*****")
        }
        if (o!==m){
            sets("*****Both the Passwords are not same*****")
        }
        if (n<=7){
            sett("*****Password must contain atleast 8 characters*****")
        }
        
    };

    return(
        <div className="su">
            <ul className="su1">
                <li>
                    <h2>
                    Looks like you're new<br/>
                    here!
                    </h2><br/>
                </li>
                <li>
                    <p className="sup">
                        Sign up with your mobile number<br/>
                        to get started
                    </p>
                </li>
                <li>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ01_cOjGMvqqTkveLLWihsNgtfOWNMXomH8LRRHh-aQDrxQGQN" width='200' height='150'></img>
                </li>
            </ul>
            <ul className="su2">
            <table>
                <tr>
                    <td>
                        Enter Phone Number
                    </td>
                    <td>
                        <input type='text' value={k} onChange={no} ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Enter Password
                    </td>
                    <td>
                        <input type='Password' value={m} onChange={no1} placeholder="Enter atleast 8 characters"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm Password
                    </td>
                    <td>
                        <input type='Password' value={o} onChange={no2}></input>
                    </td>
                </tr>
            </table>
            <li className="sureq">
                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
            </li>
            <li>
                <button onClick={req} className="subutton">Continue</button>
            </li>
            <li className="sudispno">
                <em>{r}</em>
            </li>
            <li className="sudispps"><em>{s}</em></li>
            <li className="sudispcps"><em>{t}</em></li>
        </ul>
            
            
        </div>
    );
}
export default Signup;

//if(l===10){
  //  alert("OTP is requested and sent via SMS");
//}
//if(l<=9){
 //   alert("Please Enter valid Number");
//}