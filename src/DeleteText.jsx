import React, { useState } from 'react';

let index = 0;

function App() {
const [items, setItems] = useState([])
const [name, setName] = useState('');

const addItem = () => {
    setName('');
    setItems([
        ...items,
        {id:index++, name:name}
    ])
}

    return(
        <>
        <input 
        type="text"
        placeholder='Add item'
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}{' '}
                <button onClick={() => {
                    setItems(items.filter(e => (
                        e.id !== item.id
                    )))
                }}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default App;