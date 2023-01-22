import React from "react";
import '../styles/about.css'

const About = () => {
    return(

            <div className="About" id="about">
                <div className="container">
                    <div className="containerPost">

                       <div id="Post_it">
                            <div id="upPost">

                                <div id="divPost">
                                    <div id="textsPort">
                                    <h3>Welcome to</h3>
                                    <h3 id='idH3'>  Artsy</h3>
                                    </div>
                                <p>I come with the intention of showing my arts and about my venture</p>
                                </div>
                               
                            </div>
                            <div id="downPost">
                                
                                

                                <img alt="mushroom" src="/images/mushroom.gif"/>
                                <h2>Welcome! I hope you enjoy!</h2>
                            </div>
                       </div>
                        

                    </div>
                    <div className="containerImgs">
                            <div id="imgWitcher">
                                <img alt='witcher' src="/images/draw3.jpg"/>
                            </div>
                            <div id='textPhase'>
                                <p>"Art is in everything"</p>
                            </div>
                    </div>

                </div>

            </div>

        )
    }
    
    export default About;