import React from 'react'


function ToDoList(props) {
  return (
    <div class="wid-100">
      <li >
        <button class="button-del"onClick={()=>{props.onSelect(props.id)}}>X</button>
        
        {props.item}

        </li>
    </div>
  )
}

export default ToDoList
