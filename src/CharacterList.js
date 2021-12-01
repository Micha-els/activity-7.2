import React from 'react'
import {Card, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';


const CharacterList = ({characters, friends}) => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [show, setShow] = useState(false);
    const [char, setChar] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (character) => {
        setShow(true);
        setChar(character)
    }
    
    return (
        <div className="d-flex gap-2">
            <div className="w-100">
                <Row className="character-card" md={3}>
                
                    {characters.map(character => (
                        <div className="pb-3" key={character.id}>
                            <Col>
                                <Card className="text-black" onClick={() => handleShow(character)}>
                                    <Card.Img  className="w-100" variant="top" src={process.env.PUBLIC_URL+`${character.image}`} />
                                    <Card.Body>
                                        <Card.Text className="fs-6 fw-bold">{character.name} </Card.Text>
                                        <p>{character.friends} Friends</p>
                                    </Card.Body>
                                </Card>  
                            </Col>   
                        </div>
                    ))}
                    <Button className="circles fs-2 w-auto rounded-circle px-3" variant="dark" onClick={handleShowModal}>
                        +
                    </Button>
                    <Modal
                        show={showModal}
                        onHide={handleCloseModal}
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
                        <Button variant="secondary" onClick={handleCloseModal}>
                            CANCEL
                        </Button>
                        <Button variant="dark">CREATE CHARACTER</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </div>
            {show === true && <div className="sidebar w-50 p-3 bg-white">
                <div className=" d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose}> x </Button>
                </div>
                <h5 className="fw-bold">{char.name}</h5>
                <p> {char.name} {char.description} She's been living on Planet {char.planet} for the past 10 years</p>
                <div className="d-flex">
                    <div className="w-50">
                        <h6 className="fw-bold">Planet</h6>
                        <p>{char.planet}</p>
                    </div>
                    <div>
                        <h6  className="fw-bold">Friends</h6>
                        <p>{char.friends}</p>
                    </div>
                </div>
                <h6>FRIENDS</h6>
                <Row className="planet-card" >
            
                {friends.map(friend => (
                    <div key={friend.id}>
                        <Col>
                                <Card className="text-black">
                                    <div className="d-lg-flex align-items-center ">
                                        <Card.Img className="h-25 w-50 " variant="top" src={process.env.PUBLIC_URL+`${friend.image}`} />
                                        <div className="ps-3">
                                            <p className="p-0, m-0 fw-bold">{friend.name} </p>
                                            <p className="">{friend.description}</p>
                                        </div>
                                    </div>
                                </Card>
                        </Col>
                        
                    </div>
                ))}
                </Row>
                </div>}
        </div>
    );
}

export default CharacterList;
