import React from 'react'

const Footer = () =>{
    return (
        <div>
             <footer className="page-footer grey darken-3">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 l6  scrollspy">
                                <h5>About</h5>
                                <p>Chisom Julius, a dedicated frontend web developer from Nigeria</p>
                                <p>A 500 level medical student at Abia State University Uturu, Nigeria</p>
                            </div>
                            <div className="col s12 l4 offset-l2 scrollspy" id="contact">
                                <h5>Connect</h5>
                                    <a href="https://www.facebook.com/chisom.julius" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="facebook">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/chisom_julius/" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://twitter.com/ChisomJavi?s=08" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright grey darken-4">
                        <div className="container center-align">&copy; 2021 Chisom Julius</div>
                    </div>
                </footer>
        </div>
    )
}

export default Footer