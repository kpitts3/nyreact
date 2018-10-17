import React from "react";
import "./ResultsList.css";
import { Card, CardHeader, CardBody } from 'reactstrap';

const ResultsList = props => (
    <Card className="search-results" id="results" style={{marginTop: 50}}>
        <CardHeader>
            <h2 className="card-header">Search Results</h2>
        </CardHeader>
        <CardBody>
            <ul className="list-group">{props.children}</ul>
        </CardBody>
    </Card>
);

export default ResultsList;