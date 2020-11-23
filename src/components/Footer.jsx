import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer pt-3">
            <div className="container">
                <div className="row">             
                    <div className="col-4">
                    <h3>Connect</h3>
                    <p>chrisjiroman@gmail.com</p>
                    

                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-envelope" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-github" /></a>{' '}
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                    <h5>Navigate</h5>
                        <ul className="list-inline list-unstyled">
                            <li className="list-inline-item"><a href="/">project</a></li>
                            <li className="list-inline-item"><a href="/">resume</a></li>
                            <li className="list-inline-item"><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;