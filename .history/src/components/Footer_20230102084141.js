import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import '../App.css';
import { GlobalState } from '../context/GlobalState';
function Footer() {
    const {lists}=useContext(GlobalState)
    return (
        <footer className='main-footer'>
            <Container>
                {lists.length=1 ? "items" :"item"} 
            </Container>
        </footer>
    )
}

export default Footer