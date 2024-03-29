import React from 'react'
import Navbar from './Navbar/Navbar'
import img from './img.jpg'

const About =() =>{
    return (
        <div className="about-page">
           <Navbar/>
            <div className="container white my-content">
                <div className="row  row-background">
                    <div className="col s12 l4 img-div">
                        <img src={img} alt="my self" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <p>
                            My name is <strong>Chisom Julius</strong> from Nigeria.
                        </p>
                        <p>
                            I'm a dedicated javascript full-stack developer with a keen eye for details, and a determination 
                            to deliver the very highest quality.
                        </p>
                        <p>
                            The main areas of my expertise are HTML(5), CSS(3), Javascript(react, jQuery, node js), and some cool 
                            collaborative tools like git and slack. I use Netlify and Heroku as my choice of deployments and my preferred
                            CMS is sanity.io
                        </p>
                        <p>
                            I try to build web apps to keep my skills and github as updated as possible, and in my free times 
                            you can find me reading medical books, playing football, watching movies, or hanging out with friends.
                        </p>
                        <p>
                            Previously, i worked with <a href="https://www.f6s.com/3reen">3REEN</a> an e-commerce marketplace with new ideas
                             and insights that would make online shopping experience as close to physical shoppping as possible. 
                        </p>
                        <p>
                            Interested in working with me? <a href="#contact">Get in touch</a> and i'd be happy to talk to you.
                        </p>

                    </div>
                </div>
            </div>
            <div className="empty-div"></div>
        </div>
    )
}

export default About
