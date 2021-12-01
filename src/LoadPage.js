import React from 'react'
import { Image } from 'react-bootstrap'

const LoadPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">   
            <Image src={process.env.PUBLIC_URL+'/assets/planet-loader.svg'}/>
        </div>
    )
}

export default LoadPage;
