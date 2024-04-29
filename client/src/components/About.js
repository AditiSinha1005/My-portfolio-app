import React from 'react'
import img from "../components/Layout/1697030227425.jpeg";
const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src={img} alt="profileimage" />
                    </div>
               
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1>About me</h1>
                
                <p>
                    Hello there! I'm Aditi Sinha, a MERN (MongoDB, Express.js, React.js, Node.js) developer with a keen interest in crafting innovative solutions. During my internship at HighRadius, I delved into the intricacies of MERN stack development, gaining valuable hands-on experience.

                    On the coding front, I've tackled over 230 questions on LeetCode, refining my problem-solving skills and deepening my understanding of algorithms and data structures. Beyond academic pursuits, I've undertaken several MERN projects to bolster my practical expertise.

                    In my projects, I strive to merge functionality with aesthetics, creating applications that not only perform well but also have an appealing user interface. Additionally, I have a knack for organizing events, which I enjoy doing when I'm not immersed in coding.

                    If you're interested in connecting or collaborating, feel free to reach out to me at aditisinhaaaa102@gmail.com. Let's make a positive impact together in the coding sphere.
                </p>
                </div>
                </div>
            </div>
        </>
    )
}

export default About
