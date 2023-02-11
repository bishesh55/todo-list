import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./main.css";
import axios from 'axios';

function Home() {
  const [nameItem, setnameItem] = useState("");
  const [Item, setItem] = useState([]);
  const [product,setProduct] = useState('');
  const [hero,setHero]=useState('');
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
 async function getData(){
    fetch('http://127.0.0.1:8000/product')
    .then(res => res.json())
    .then(a => {
      setProduct(a.id)
     
      
      // console.log(product)
    })           
  }
   function getHero(){
    fetch('http://127.0.0.1:8000/hero')
    .then(res => res.json())
    .then(b => {
      setHero(b.id)
      
      // console.log(monkeyking)
    })           
  }
  function sendHero(){
    axios.post("http://127.0.0.1:8000/hero",{
      name:nameItem,
    })
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
          Rendering displayed data: {product}
          Monkeyking stats:{hero}
        </div>
        <div className="added-items center wid-100">
        <button onClick={getData}>Get data</button>
        <button onClick={getHero}>Get hero</button>
        <button onClick={sendHero}>Send hero</button>

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
