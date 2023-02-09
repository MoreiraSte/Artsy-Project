import React from "react";
import '../styles/myArts.css'

const MyArts = () => {
    return(
        <div className="MyArts" id="myarts">
            <div className="container">
                <div class="grid-container">
                <div><img alt='dr1' src="images/draw3.jpg"/></div>
                <div><img alt='dr2' src="images/draw10.jpg"/></div>
                <div><img style={{width:'34vh',height:'41vh'}} alt='dr3' src="images/draw11.jpg"/></div>  
                <div><img  style={{width:'34vh',height:'41vh'}} alt='dr4' src="images/draw7.jpg"/></div>
                <div><img  style={{width:'31vh',height:'41vh'}} alt='dr5' src="images/draw4.jpg"/></div>
                <div><img style={{width:'31vh',height:'41vh'}}alt='dr6' src="images/draw9.jpg"/></div>  
                <div><img style={{width:'40vh',height:'41vh'}}alt='dr7' src="images/draw12.jpg"/></div>
                <div><img style={{width:'31vh',height:'41vh'}}alt='dr8' src="images/draw15.jpg"/></div>  
                <div><img style={{width:'31vh',height:'41vh'}}alt='dr9' src="images/draw6.jpg"/></div>
                <div><img style={{width:'31vh',height:'41vh'}}alt='dr10' src="images/draw8.jpg"/></div>  
                </div>


            </div>

        </div>
    )
}
export default MyArts;