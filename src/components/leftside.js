import React from "react";
import reactangle from '../resources/Rectangle.png'
import frame from '../resources/Frame.png'
import rectangle3 from '../resources/Rectangle 3.png'
import rectangle2 from '../resources/Rectangle 2.png'
import rectangle1 from '../resources/Rectangle 1.png'
import linkdin from '../resources/li.png'
import facebook from '../resources/fb.png'
import instagram from '../resources/ig.png'


const Left = () =>{
    return(
    <div className="parent">
        <img className="rectangle" src={reactangle} alt="left-side" />
        <div></div>
        <div className="data">
        <img className= "logo"src={frame} alt="logo" />
        <p className="data">100% Uptime😎 <br/>Zero Infrastructure Management</p>
        <img className="rectangle3" src={rectangle3} alt="retcangle 3"/>
        <img className = "rectangle2" src={rectangle2} alt="rectangle 2"/>
        <img className = "rectangle1" src={rectangle1} alt="rectangle 1"/>
        <a className="url" href="https://aesthisia.com/">asethisia.com</a>
        <a href="https://www.linkedin.com/company/aesthisia/"><img className = "linkdin" src={linkdin} alt="linkdin"/></a>
        <a href="https://www.facebook.com/aesthisia/"><img className = "facebook" src={facebook} alt="facebook"/></a>
        <a href="https://www.instagram.com/aesthisia/"><img className = "instagram" src={instagram} alt="instagram" /></a>
        
        </div>
                
        
    </div>

)}

export default Left;