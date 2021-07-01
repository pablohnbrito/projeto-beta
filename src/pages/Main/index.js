import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import classes from '../../styles/Main.module.css'

function Home () {
    return (
        <>
            <Container className={classes.conteiner} fluid="true">
            <Row>
            <Col>
            <h4>Sobre mim</h4>
            <p>Formação</p>
            <ul>
                <li>Graduado em Administração pela Universade de Pernambuco</li>
                <li>Estudante de Ciências da Computação pela UNINASSAU</li>
            </ul>
            <p>Habilidades</p>
            <ul>
                <li>Inglês</li>
                <li>Espanhol</li>
                <li>HTML5, CSS3 e Javascript</li>
                <li>React Js</li>
                <li>Git</li>
            </ul>
            <p>Atualmente atuando como Analista Service Desk Trilíngue pela Accenture.</p>
            <p>Como entrar em contato comigo:</p>
            <ul>
                <li><a href ="https://www.linkedin.com/in/pablohenriquebrito">LinkedIn</a></li>
                <li><a href="mailto:pablo.brito@live.com">E-mail</a></li>
            </ul>
            </Col>
            <Col className={classes.imagem}>
                <img src="https://media-exp3.licdn.com/dms/image/C4E03AQHp1hvxEH4vEg/profile-displayphoto-shrink_800_800/0/1589398323683?e=1630540800&v=beta&t=IZpnLR6EaxtlGMh68jif1g2tzOIY8EESWfZiVAFjqtU" alt="foto de Pablo"/>
            </Col>
            </Row>
            </Container>
        </>
    )
}

export default Home