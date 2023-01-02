import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import '../App.css';
import { GlobalState } from '../context/GlobalState';
function Footer() {
    const {lists}=useContext()
    return (
        <footer className='main-footer'>
            <Container>
                TO-DO LIST
            </Container>
        </footer>
    )
}

export default Footer