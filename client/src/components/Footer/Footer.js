import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Container from "../../components/Container";
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <CardBody>
                        <CardTitle className="footer-heading">
                            New York Times Article Scrubber
                        </CardTitle>
                        <CardText><b>Copyright &copy; 2018</b></CardText>
                        <a href="https://twoxbradley.github.io/nyreact/" target="_blank" rel="noopener noreferrer" className="footer-button">
                            <Button size="lg">GitHub Repo</Button>
                        </a>
                        <a href="www.linkedin.com/in/jbradleyjr" target="_blank" rel="noopener noreferrer" className="footer-button btn-lg">
                            <Button size="lg" style={{ marginLeft: 10 }}>LinkedIn</Button>
                        </a>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Footer;
