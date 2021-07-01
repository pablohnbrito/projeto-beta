import React from 'react'
import { Col, Row , Container} from 'reactstrap'
import classes from '../../styles/Footer.module.css'

function Footer() {
    return (
        <footer>
            <Container color="dark" className={classes.footer} fluid={true}>
                        <p>oi</p>    
            </Container>
        </footer>
     
    )
}

export default Footer