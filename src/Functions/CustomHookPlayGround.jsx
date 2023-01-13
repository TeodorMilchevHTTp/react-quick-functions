import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react';

const useStatemanager = (props) => {
const[count, setCount] = useState(0)
return {count, setCount}
} 

function App() {
    const {
        count,
        setCount
    } = useStatemanager();
    
return(
    <>
        <div>Play Ground</div>
        <p>{count}</p>
        <button onClick={() => {setCount(count+1)}}></button>
    </>
    )
}

export default App;