import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { GlobalState } from '../context/GlobalState'
function AddItem() {
    const { handleAdding, setAddItemInput,addItemInput } = useContext(GlobalState)
    const handleChange = (e) => {
        setAddItemInput(e.target.value)
    }
    return (
        <section className='add-item'>
            <Container>
                <form action="
               " onSubmit={(e) => {
                        handleAdding()
                        e.preventDefault()
                        setAddItemInput("")
                    }}>
                    <div className="add-item-cover d-flex">
                        <input type="text"
                            className='custom-input'
                            value={addItemInput}
                            onChange={handleChange}
                        />
                        <button type='submit' className='btn btn-success add-btn' >Add</button>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default AddItem