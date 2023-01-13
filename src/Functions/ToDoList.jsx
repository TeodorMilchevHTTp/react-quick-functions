import React, { useState } from 'react';

let nextId = 0;

const List = () => {

    const[name, setName] = useState('');
    const[artists, setArtists] = useState([]);


    const handleClick = () => {
        setName('');
        setArtists([
            ...artists,
            {id:nextId++, name:name}
        ])
    }
    
    return(
        <>
            <h3>Add items to list</h3>
            <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)} 
            />
            <button onClick={handleClick}>Add</button>
            <ul>
                {artists.map(a => (
                    <li key={a.id}>{a.name}</li>
                ))}
            </ul>
        </>
    )
}
 
export default List;