import React from "react";
import "./SavedArticles.css";
import { Card, CardHeader, CardBody } from 'reactstrap';

const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <CardHeader>
            <h2 class="card-header">Saved articles</h2>
        </CardHeader>
        <CardBody>
            {}
        </CardBody>
    </Card>
);

export default SavedArticles;
