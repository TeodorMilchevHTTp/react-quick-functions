import React, {useState} from 'react';

const List = () => {
const [show, setShow] = useState(true)

return(
    <div>
        <button onClick={() => setShow(show => !show)}>Show/Hide</button>
        {show ? <p>Hide me</p> : null}
    </div>
)
}
 
export default List;