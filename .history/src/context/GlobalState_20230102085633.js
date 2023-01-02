// import { data } from "../data";
import { createContext } from "react";
import { useState } from "react";
export const GlobalState = createContext()
export const GlobalProvider = (props) => {
    const [lists, setLists] = useState(JSON.parse(localStorage.getItem("lists")));
    const [addItemInput, setAddItemInput] = useState("")

    function setAndSaveItems(newLists){
        setLists(newLists)
        localStorage.setItem("lists", JSON.stringify(newLists))
    }
    const handleChecked = (id) => {
        const newLists = lists.map((list) => list.id === id ? { ...list, checked: !list.checked } : list)
        setAndSaveItems(newLists)
    }

    const handleDelete = (id) => {
        const newLists = lists.filter(list => list.id !== id)
        setLists(newLists)
        localStorage.setItem("lists", JSON.stringify(newLists))
    }

    const handleAdding = () => {
        if (addItemInput) {
            const id = lists.length + 1;
            const newItem = { id, checked: false, title: addItemInput }
            const newLists = [...lists, newItem]
            setLists(newLists)
            localStorage.setItem("lists", JSON.stringify(newLists))
        }
    }
    return (
        <GlobalState.Provider value={{
            lists,
            setLists,
            handleChecked,
            handleDelete,
            handleAdding,
            addItemInput,
            setAddItemInput
        }
        }>
            {props.children}
        </GlobalState.Provider>
    )
}