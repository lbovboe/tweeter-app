import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
    const [users,setUsers] = useState([
        {name:"paul", message:"this is a random tweet"},
        {name:"John", message:"good job today"},
        {name:"joy", message:"nothing to do"}
    ])

    return(
        <>
            <div className = "app">
                
                {
                    users.map(user =>(
                        <Tweet name={user.name} message={user.message}/>
                    ))
                }
                
            
            </div>
            <h1>Hello</h1>
        </>

    )
}

export default App;