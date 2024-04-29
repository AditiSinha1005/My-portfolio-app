import React from 'react'
import img from "../Layout/aditi_passport.jpg"
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        
        <>
        <h1>Menu tag</h1>
      <div className="navbar-profile-pic">
              <img
                src={img}
                alt="profile pic"
                className="small-profile-pic" 
              />
            </div>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                
                    <FcHome />
                    Home
                </div>
                <div className="nav-link">
                  
                    <FcAbout />
                    About
                 
                </div>
                <div className="nav-link">
                  
                    <FcReadingEbook />
                    Education
                
                </div>

                <div className="nav-link">
                 
                    <FcBiotech />
                    Tech Stack
               
                </div>

                <div className="nav-link">
                  
                    <FcVideoProjector />
                    Projects
                 
                </div>
                <div className="nav-link">
                    <FcPortraitMode />
                    Work Experince
                </div>
                <div className="nav-link">
    
                    <FcBusinessContact />
                    Contact
                </div>
              </div>
            </div>
        </>
    ) : (<>
        <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                
                    <FcHome />
                
                </div>
                <div className="nav-link">
                  
                    <FcAbout />
               
                 
                </div>
                <div className="nav-link">
                  
                    <FcReadingEbook />
         
                
                </div>

                <div className="nav-link">
                 
                    <FcBiotech />
                
               
                </div>

                <div className="nav-link">
                  
                    <FcVideoProjector />
                 
                 
                </div>
                <div className="nav-link">
                    <FcPortraitMode />
                    
                </div>
                <div className="nav-link">
    
                 
                </div>
              </div>
            </div> 
    </>)}
    
    </>
  )
}

export default Menus
