import React from "react";
import '../styles/home.css'

const Hero = () => {
    return(
              
         
        <div className="Hero" id="home">
           
           <div className="containerRight">

                <div className="social">
                    <div>
                        <a href='#'><img alt="social_tumblr" src="/images/tumblr_icon.png"/></a>
                        
                    </div>
                    <div>    
                        <a href='#'><img alt="social_tumblr" src="/images/icon_insta.png"/></a>
                    </div>
                </div>
           </div>
           <div className="containerLeft">

                <img alt="slogan" src="/images/logo.jpeg" />

           </div>

        </div>
        

    )
}

export default Hero;