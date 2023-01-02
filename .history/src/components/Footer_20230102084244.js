import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import '../App.css';
import { GlobalState } from '../context/GlobalState';
function Footer() {
    const {lists}=useContext(GlobalState)
    return (
        <footer className='main-footer'>
            <Container>
           {lists.length} item{item.length==1?null:"s"}
            </Container>
        </footer>
    )
}

export default Footer