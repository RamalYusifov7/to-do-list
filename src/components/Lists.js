import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import SingleList from './SingleList'
import { GlobalState } from '../context/GlobalState'
function Lists() {
    const { lists } = useContext(GlobalState)
    return (
        <section className="lists">
            <Container>
                { lists.length>0 ? (lists.map(list => {
                    return (
                        <SingleList key={list.id} list={list}
                        />
                    )
                })) : (
                <div className='no-list'>
                    There is no list
                </div>
                )}
            </Container>
        </section>
    )
}

export default Lists