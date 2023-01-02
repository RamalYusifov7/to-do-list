import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GlobalState } from '../context/GlobalState'
function SingleList({ list }) {
    const { handleChecked, handleDelete } = useContext(GlobalState)
    const { id, title, checked } = list
    return (
        <div className="single-list">
            <Row className='align-items-center'>
                <Col xs={9}>
                    <div className="list-checkbox">
                        <input type="checkbox"
                            id={id}
                            checked={checked}
                            onChange={() => { handleChecked(id) }}
                        />
                        <label htmlFor={id} style={checked ? { textDecoration: "line-through" } : null} >{title}</label>
                    </div>
                </Col>
                <Col xs={3}>
                    <button type='button' className='btn btn-danger' onClick={() => { handleDelete(id) }}>
                        Delete
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default SingleList