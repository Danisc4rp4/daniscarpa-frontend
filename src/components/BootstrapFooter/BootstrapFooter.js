import React from 'react'
import { Navbar } from 'react-bootstrap'

class BootstrapFooter extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="light" variant="light" expand="lg" sticky="bottom">
                            <Navbar.Brand href="mailto:info@daniscarpa.com">Contact me</Navbar.Brand>
                        </Navbar>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapFooter;