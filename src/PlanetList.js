import {Card, Row, Col, Button, Modal, Form} from 'react-bootstrap';
import { useState } from 'react';


const PlanetList = ({planets, characters}) => {
    const [showCreate, setShowCreate] = useState(false);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const [showModalC, setShowModalC] = useState(false);
    const handleCloseModalC = () => setShowModalC(false);
    const handleShowModalC = () => setShowModalC(true);



    const [show, setShow] = useState(false);
    const [plan, setPlan] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (planet) => {
        setShow(true);
        setPlan(planet)  
    }
    

    return (
        <div className="d-flex gap-2">
            <div>
                <Row md={3}>
                
                    {planets.map(planet => (
                        <div className="pb-3" key={planet.id}>
                            <Col>
                                <Card className="text-black" onClick={() => handleShow(planet)}>
                                    <Card.Img className="w-75 mx-auto" variant="top" src={process.env.PUBLIC_URL+`${planet.image}`} />
                                    <Card.Body>
                                        <Card.Text className="fs-6 fw-bold">Planet {planet.name} </Card.Text>
                                        <p>Pop: {planet.population}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </div>
                    ))}
                        <Button className="circles fs-2 w-auto rounded-circle px-3" variant="dark" onClick={handleShowCreate}>
                            +
                        </Button>
                        
                    <Modal
                        show={showCreate}
                        onHide={handleCloseCreate}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title className="fs-3 fw-bold">Planet</Modal.Title>
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
                                    <Form.Control className="bg-light" type="text" placeholder="Planet's name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="fs-6 fw-bold">Description</Form.Label>
                                    <Form.Control className="bg-light" as="textarea" rows={3} placeholder="Brief description of the planet"/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseCreate}>
                            CANCEL
                        </Button>
                        <Button variant="dark">CREATE PLANET</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </div>
            {show === true && <div className="sidebar p-3 bg-white">
                <div className=" d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose}> x </Button>
                </div>
                <h4 className="fw-bold">Planet {plan.name}</h4>
                <p>Planet {plan.name} {plan.description}</p>
                <h6>Population</h6>
                <p className="fw-bold">{plan.population}</p>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                    <h6>CHARACTERS</h6>
                    <Button variant="secondary" onClick={handleShowModalC}> + </Button>
                </div>
                <Row className="planet-card" >
            
                {characters.map(character => (
                    <div key={character.id}>
                        <Col>
                                <Card className="text-black">
                                    <div className="d-lg-flex align-items-center ">
                                        <Card.Img className="h-25" variant="top" src={process.env.PUBLIC_URL+`${character.image}`} />
                                        <div className="ps-3">
                                            <p className="p-0, m-0 fw-bold">{character.name} </p>
                                            <p>{character.friends} friends</p>
                                        </div>
                                    </div>
                                </Card>
                        </Col>
                        
                    </div>
                ))}
                </Row>
                
                <Modal
                    show={showModalC}
                    onHide={handleCloseModalC}
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
                    <Button variant="secondary" onClick={handleCloseModalC}>
                        CANCEL
                    </Button>
                    <Button variant="dark">CREATE CHARACTER</Button>
                    </Modal.Footer>
                </Modal>
            </div>}
        </div>
    );
}

export default PlanetList;
