import React from 'react'
import Typewriter from 'typewriter-effect';
import resume from "../assets/docs/resumeaditi.pdf";
const Home = () => {
    return (
        <>
            <div className="container-fluid home-container" id="home">
            <div className="container home-content">
                <h2>Hi👋 I am a</h2>
                <h1><Typewriter
                    options={{
                        strings: ['Mern Stack Developer !'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h1>
                 <div className="home-buttons">
                    <button className='btn btn-hire'>Hire me</button>
                    <a className='btn btn-cv' href={resume} download="aditi.pdf">Resume</a>
                 </div>
                 </div>
            </div>
        </>
    )
}

export default Home
