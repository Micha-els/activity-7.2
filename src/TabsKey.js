import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const TabsKey = () => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item >
                    <Nav.Link> <Link to="/" className="text-decoration-none text-black fs-5">PLANETS</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><Link to="/CharactersPage" className="text-decoration-none text-black fs-5">CHARACTERS</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
       
        

    )
}

export default TabsKey
