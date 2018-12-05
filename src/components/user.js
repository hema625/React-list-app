import React from 'react';

const user = (props) => {

    return(
         <div>
          <li> 
          <span> Name : {props.children} | Age : {props.age} </span>
          <button onClick = {props.delete}>Delete</button>
          <input type = "text"onChange = {props.chgevt} value = {props.children}></input>
          </li>
         </div>
    )
}

export default user;