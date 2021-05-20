import React ,{useState}from 'react';
import "./App.css"
// cannot put any name in the parameter if we use destructuring
// object destructuring into props name, must be the name we use in props
function Tweet({name,message}){
    const [isRed,setRed] = useState(false);
    const [countLike,setCountLike] = useState(0);
    const [countDislike,setCountDislike] = useState(0);

    const like=()=>{
        setCountLike(countLike+1);
        // toggled using !
        setRed(!isRed);
    }
    const dislike=()=>{
        setCountDislike(countDislike+1);
    }
    return(
        <div className = "tweet">
            <h3>{name}</h3>
            <p className ={isRed ? 'red' :''}>{message}</p>
            <h3>Number of likes :{countLike}</h3>
            <h3>Number of dislikes: {countDislike}</h3>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </div>
    )
}
export default Tweet;