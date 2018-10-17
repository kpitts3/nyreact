import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Jumbotron.css';

const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <h1 className="display-3">New York Times Article Scrubber</h1>
                <p className="lead">Search for and annotate articles of interest</p>
            </Jumbotron>
        </div>
    );
};

export default NYTJumbotron;