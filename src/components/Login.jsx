import wallpaper from './images/wallpaper.png'
import logo from './images/logo.png'
import profile from './images/profile.png'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function Login(){
    const [userDetails, setUserDetails] = useState({username:"", password:""})

    const navigate = useNavigate();
    const handleForm=(event)=>{
const value= event.target.value;
const key = event.target.name;
setUserDetails({...userDetails, [key]: value})
    }
    const handleSubmit=()=>{
        navigate("/dashboard")
    }

    return(
        <div className="flex-container">
        <img src={wallpaper} className="left-image"></img>
        <div className="spacer"></div>
        <img src={wallpaper} className="right-image"></img>
        <div className='card'>
          <div className='logo-container'>
            <img src={logo} className='logo'/>
          </div>
          <div style={{display: "flex"}}>
          <div class="blob-container">
        <div class="profile-image">
        <img src={profile} className='profile-image'/>
        </div>
        </div>
        <div style={{width: '53%'}}>
          <h5>Welcome back...</h5>
          <input placeholder='username' name="username" type="text" value={userDetails.username} onChange={handleForm} className='input-box'/>
          <input placeholder='Password' name="password" type="password" value={userDetails.password} onChange={handleForm} className='input-box'/>
          <div className='remember-me-box'>
            <input type="checkbox" style={{marginBottom: "0px"}}/>
            <span style={{paddingTop:"5px"}}>Remember Me</span>
          </div>
          <button disabled={userDetails.username === "" || userDetails.password===""} className='login-button' onClick={handleSubmit}>Login</button>
        </div>
    </div>
    
        </div>
    </div>
    )
}