import React from 'react'
import Navbar from './Navbar/Navbar'
import img from './img.jpg'

const About =() =>{
    return (
        <div className="about-page">
           <Navbar/>
            <div className="container white my-content">
                <div className="row">
                    <div className="col s12 l4">
                        <img src={img} alt="my self" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <p>
                            My name is <strong>Chisom Julius</strong> from Nigeria
                        </p>
                        <p>
                            I'm a dedicated front-end developer with a keen eye for details, and a determination 
                            to deliver the very highest quality.
                        </p>
                        <p>
                            The main areas of my expertise are HTML(5), CSS(3), Javascript(react and jQuery), and some cool 
                            collaborative tools like git and slack. I use Netlify as my choice of deployments and my preferred
                            CMS is sanity.io
                        </p>
                        <p>
                            I try to build web apps to keep my skills and github as updated as possible, and in my free times 
                            you can find me reading medical books, playing football, watching movies, or hanging out with friends.
                        </p>
                        <p>
                            Interested in working with me? <a href="#contact">Get in touch</a> and i'd be happy to talk to you.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
