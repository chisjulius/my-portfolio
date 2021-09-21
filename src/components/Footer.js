import React from 'react'

const Footer = () =>{
    return (
        <div>
             <footer className="page-footer grey darken-3">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 l6  scrollspy">
                                <h5 className="center">About</h5>
                                <p className="center">Chisom Julius, A dedicated javascript fullstack developer from Nigeria.</p>
                                <p className="center">Lives at Abia State University teaching hospital Aba, Nigeria.</p>
                            </div>
                            <div className="col s12 l4 offset-l2 scrollspy" id="contact">
                                <h5 className="center">Connect</h5>
                                <div  className="center">
                                <a href="mailto:chisomjulius640@gmail.com"  target="_top" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="email">
                                        <i class="fas fa-envelope-open-text"></i>
                                    </a>
                                    <a href="https://www.facebook.com/chisom.julius" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="facebook">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/chisom-julius-68a156205/" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="linedin">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://twitter.com/ChisomJavi?s=08" target="_blank" rel="noreferrer" className="tooltipped btn-floating btn-small grey darken-4 foot-space" data-tooltip="twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>

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