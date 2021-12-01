import React from 'react'
import {Card, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({characters}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className="character-card" md={3}>
           
            {characters.map(character => (
                <div className="card" key={character.id}>
                    <Col>
                        <Link to={`/characters/${character.id}`}>
                            <Card className="text-black">
                                <Card.Img  className="w-100" variant="top" src={process.env.PUBLIC_URL+`${character.image}`} />
                                <Card.Body>
                                    <Card.Text className="fs-6 fw-bold">{character.name} </Card.Text>
                                    <p>{character.friends} Friends</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>   
                </div>
            ))}
            <Button className="circles fs-2 w-auto rounded-circle px-3" variant="dark" onClick={handleShow}>
                +
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title className="fs-3 fw-bold">Character</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-6 fw-bold">Image</Form.Label>
                            <Form.Control className="bg-light" type="textpath" />
                            <Form.Text className="text-muted">
                            Paste the URL of a JPG or PNG of max 20kb.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-6 fw-bold">Name</Form.Label>
                            <Form.Control className="bg-light" type="text" placeholder="Character's name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-6 fw-bold">Description</Form.Label>
                            <Form.Control className="bg-light" as="textarea" rows={3} placeholder="Brief description of the character"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-6 fw-bold">Friends</Form.Label>
                            <Form.Select aria-label="Floating label select example" className="bg-light">
                                <option>Select friends</option>
                                <option value="1">Jerome Bell</option>
                                <option value="2">James Brown</option>
                                <option value="3">Lucy Bronze</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    CANCEL
                </Button>
                <Button variant="dark">CREATE CHARACTER</Button>
                </Modal.Footer>
            </Modal>
        </Row>
    );
}

export default Sidebar;
