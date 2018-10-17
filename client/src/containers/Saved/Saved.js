import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Jumbotron from '../../components/Jumbotron';
import SavedArticles from '../../components/SavedArticles';
import Footer from '../../components/Footer';

const Saved = () => (
    <div>
        <Jumbotron />
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <SavedArticles />
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
);

export default Saved;