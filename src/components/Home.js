import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./main.css";
function Home() {
  const [nameItem, setnameItem] = useState("");
  const [Item, setItem] = useState([]);
  const nameIt = (event) => {
    setnameItem(event.target.value);
  };
  const listItems = () => {
    setItem([...Item, nameItem]);
    setnameItem("");
  };
  const deleteItems = (id) => {
    setItem((Item) => {
      return Item.filter((arrElm, index) => {
        return id !==  index;
      });
    });
  };
  function getSomeData(){
    
  }


  return (
    <div className="mainDiv">
      <div className="centerDiv">
        <br />
        <h1>ToDo List</h1>
        <br />
        <div className="add-item center">
          <input
          className="input-item"
            type="text"
            placeholder="Add an item"
            value={nameItem}
            onChange={nameIt}
          />
          <button class="button-add"onClick={listItems}>+</button>
        </div>
        <div className="added-items center wid-100">
        <button onClick={}></button>
        <ol className="listing">
          {Item.map((itemval, index) => {
            return (
              <ToDoList
              key={index}
              item={itemval}
              id={index}
              onSelect={deleteItems}
              />
              );
            })}
        </ol>
            </div>
      </div>
    </div>
  );
}

export default Home;
