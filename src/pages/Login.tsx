import { useState } from "react";
import Lists from "../components/list";
import Listing from "../components/props"
import '../custom.css'


function Login() {
    
    const [enablediv, enablar] = useState(false);

    const Showdiv = () => {
       

        enablar(true);


    };

    const removediv = () => {
        enablar(false)
    }
    
    return(
     

<div>


     <div  className="custom-div absolute  sm: -ml-5 ">
     <h1 data-text="My portfolio.com">My portfolio.com</h1>
     </div>
    
<div className="nav-holder h-9 w-10 absolute right-3 top-7 meds:top-8 legs:h-big legs:w-big meds:pt-1 legs:pt-2 pt-1 " onClick={Showdiv}  >
<i className="fa-solid fa-bars "></i>
</div>

<div className=" form-holder">
a
<div className="form-box w-settle login mx-auto relative top-20 desktop:w-increase desktopx:w-increasing  ">

<form action="">
    <h1 className="text-center text-primary text-minor meds:text-meduim legs:text-bigg "> Login</h1>
 <div className="input-box relative top-2">
    <input type="text" placeholder="Username" required />
    <i className="fa-solid fa-user"></i>
 </div>

 <div className="input-box relative top-8">
    <input type="text" placeholder="passworld" required />
    <i className="fa-solid fa-lock"></i>
 </div>

 <div className="remember-forgot text-primary flex relative top-8  ">
    <label ><input type="checkbox"  /> remember me</label>
<a href="#" className="relative right-6">Forgot passworld</a>   
 </div>
 

<button className="text-slate-950 bg-primary relative top-9 right-4" type="submit">submit</button>


<div className="register-link text-primary relative top-8">
    <p>Dont have an account ?</p> <a href="/register">Register</a>
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

export default Login;