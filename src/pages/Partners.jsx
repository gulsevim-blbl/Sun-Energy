import React from 'react'
import "../styles/Partners.css"
import More from "../assets/Ic_Arrow.png";
import GridSolution from "../assets/Grid Solution.png"
import Ic_Thunderbolt from "../assets/Ic_Thunderbolt.png"
// import Barner from "../assets/Banner.png"
import GunesPaneli from "../assets/günesPaneli.png"
const Partners = () => {
  return (
    <div className='partners-container'>
       <div className="Text">
            <header>
            <div className="header-content"> 
                <span className="our-solution">our solution</span>
                <div className="Line"> </div>
            </div>   
            <span className="Powering-A-Sustainable-and-Profitable-Energy-Transition-on-Digital-Solutions">
                Powering A Sustainable and Profitable Energy Transition on Digital Solutions
            </span>
            <div className="Learn-More">
                    <a href="/">
                        <span className="More">Learn More</span>
                        <img src={More} alt="More Icon" />
                     </a>
                </div>    
            </header>
        </div>
        <img  className="GunesPaneli" src={GunesPaneli} alt='Günes Paneli'/>
        <div className="Vector2"></div>
        <div className="Vector"></div>
        <img className='GridSolution' src={GridSolution} alt='Grid Solution'/>
        <img className='Ic_Thunderbolt' src={Ic_Thunderbolt} alt='Ic_Thunderbolt'/>
        <div className="Bg">
            <span className="Decarbonization-requires-balance-between-legacy-systems-and-emerging-technologies-Between-the-envir">
                Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.
            </span>
            
        </div>
    </div>
    
  )
}

export default Partners
