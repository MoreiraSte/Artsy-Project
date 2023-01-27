import React from "react";
import '../styles/aboutMe.css'


const AboutMe = () => {

    return(
        <div className="AboutMe" id="aboutMe">

            <div className="containerMe">

                <div className="text">

                <ul >

                <li><img src="/images/icon_parag.png" alt="imgme"/>Meu nome é Stephany!</li>
                <br></br>
                <li><img src="/images/icon_parag.png" alt="imgme"/>Sou artista a 10 anos</li>
                <br></br>
                <li><img src="/images/icon_parag.png" alt="imgme"/></li>



                </ul>

                </div>
                <div className="imgMe">

                    <div className="containerImg">

                        <img src="/images/me.png" alt="imgme"  />

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default AboutMe