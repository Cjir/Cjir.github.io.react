import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Jumbotron
} from 'reactstrap';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Jumbotron className="heroBanner" fluid>
                    <h1 className="text-center">
                        Christopher John Roman
                        <br />
                        <span >
                            Front End Web Developer
                        </span>
                    </h1>
                </Jumbotron>

                {/* About Me */}
                <div className="container">

                    {/* About Me Row */}
                    <div className="row mb-3">
                        <div className="col-4 offset-2">

                        </div>
                        <div className="col-4">
                            <h2>
                                About Me
                            </h2>
                            <br />
                            <p>
                                Front End Developer with a background in design. Having a background in culinary, creation and design are things that spark my passion.
                            </p>
                            <p>
                                My technical experience includes JavaScript, HTML/CSS/SCSS, React, Node, Npm, and Bootstrap. I'll be working on my photography or whipping up a recipe in the Kitchen.
                            </p>
                        </div>
                    </div>

                    {/* Skill Information Row */}
                    <div className="row">
                        <div className="col-4 ml-auto">
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5" className="text-center">Frontend</CardTitle>
                                        <CardSubtitle tag="h6" className="text-center">Card subtitle</CardSubtitle>
                                        <CardText>
                                            <ul>
                                                <li>React</li>
                                                <li>HTML</li>
                                                <li>CSS/SASS</li>
                                                <li>Bootstrap/Zurb</li>
                                            </ul>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="col-4 mr-auto">
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5" className="text-center">Design</CardTitle>
                                        <CardSubtitle tag="h6" className="text-center">Card subtitle</CardSubtitle>
                                        <CardText>
                                            <ul>
                                                <li>XD/BalsamiQ</li>
                                                <li>Illustrator</li>
                                                <li>InDesign</li>
                                                <li>Photoshop</li>
                                            </ul>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="Divider"/>

                    <div className="row">
                        <div className="col">
                            <h2 className="text-center">Photography</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;