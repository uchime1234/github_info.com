import {ChangeEvent, FormEvent, useState} from 'react'
import '../register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {

   const [enablediv, enablar] = useState(false);
   const Showdiv = () => {
       enablar(true);
   };
   const removediv = () => {
       enablar(false)
   }
   

const [username, setusername] = useState(""); //intializing the input data, that will hold the data
const [password, setpassword] = useState("");
const [confirmpassword, setconfirmpassword] = useState("")
const [email, setemail] = useState("");
const [error, seterror] = useState("")
const navigate = useNavigate()


const handlesubmit = async(e: React.FormEvent ) => {

   e.preventDefault();

   if(password !== confirmpassword) {
      seterror('passwords do not match');
      return;
   }
  
   try{
      const response = await axios.post('http://127.0.0.1:8000/register/', {
         username,
         email,
         password
      });
      console.log(response.data)
      setTimeout(() => {navigate("/login")}, 2000)
      seterror('logged in successfuly')
   } catch(err: any) {
      console.log(err)
      if(err.response && err.response.data.error) {
       seterror(err.response.data.error)
      } else {
         seterror('an unexpected error occured')
      }
   }



}



    return (


    <div>


<div  className="custom-div absolute  sm: -ml-5 ">
     <h1 data-text="My portfolio.com">My portfolio.com</h1>
     </div>
    
<div className="nav-holder h-9 w-10 absolute right-3 top-7 meds:top-8 legs:h-big legs:w-big meds:pt-1 legs:pt-2 pt-1 " onClick={Showdiv}>
<i className="fa-solid fa-bars "></i>
</div>

{error &&  <div className='text-red-700 relative top-16'>{error}</div>}

<div className=" form-holder">
a
<div className="form-box w-settle login mx-auto relative top-20 desktop:w-increase desktopx:w-increasing  ">

<form onSubmit={handlesubmit} >
    <h1 className="text-center text-primary text-minor meds:text-meduim legs:text-bigg ">Register</h1>

 <div className="input-box relative top-2">
    <input type="text" name='username' value={username} onChange={ (e) => setusername(e.target.value)} placeholder="Username" required />
    <i className="fa-solid fa-user"></i>
 </div>

 <div className="input-box relative top-5">
    <input type="email" name='email' value={email} onChange={ (e) => setemail(e.target.value)} placeholder="Email" required />
    <i className="fa-solid fa-envelope"></i>
 </div>

 <div className="input-box relative top-8">
    <input type="password" name='password' value={password} onChange={ (e) => setpassword(e.target.value)} placeholder="Password" required />
    <i className="fa-solid fa-lock"></i>
 </div>


 <div className="input-box relative top-8">
    <input type="password" name='password2' value={confirmpassword} onChange={ (e) => setconfirmpassword(e.target.value)} placeholder="Password2" required />
    <i className="fa-solid fa-lock"></i>
 </div>




 <div className="remember-forgot text-primary flex relative top-7  ">
    <label ><input type="checkbox"  /> I agree to terms and conditions</label>

 </div>

<button className="text-slate-950 bg-primary relative top-7 right-4 " type="submit">submit</button>


<div className="register-link text-primary relative top-7 left-[100px]">
    <p>Already have an account ?</p> <a href="/login">Login</a>
</div>



</form>
</div>

</div>
<div id="screen-size-indicator"></div>


{enablediv && <div> <div className="  comfort-days h-issues  " onClick={removediv}>

</div>


<div className=" lost-found w-devs absolute top-0 right-0 h-issues meds:w-devsop medss:w-devsopo legs:w-settle desktop:w-increase">
<div className=" showers-cone meds:text-minor legs:text-meduim desktop:text-bigg ">
my portfolio.com
</div>
<button className="w-hundread font-bold bg-primary h-10 relative top-52 rounded-round transition-transform transform active:scale-75">About US</button>
<button className="w-hundread font-bold bg-primary h-10 relative top-56 rounded-round transition-transform   transform active:scale-75">Copyrights</button>

</div>
</div>
}




</div>







  )
}


export default Register