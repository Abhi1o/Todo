// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import React, { useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus} from '@fortawesome/fontawesome-svg-core';
import {faPlus,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Hero from "./Components/Hero";
import List from "./Components/List";
import Logo from "./Components/Logo";
import {v4 as uuidv4} from "uuid";
import "./App.css";

library.add(faPlus);
const getLocalStorage=() =>{
  let items = localStorage.getItem("items")
  if (items){
    return JSON.parse(localStorage.getItem("items"))
  }else{
    return[]
  }
}

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      title: text,
    }
    setItems([newItems, ...items])
    setText("")
  }
  const deleteItem = (id)=>{
    setItems(items.filter((item)=> item.id !== id))
    
  }
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
    
  },[items])
  
 
  return (
    <div className="App">
      <Hero />
      <Logo />
      
        <form className=" w-[520px] relative inputbox shadow-md rounded-md font-medium flex items-center justify-center" onSubmit={handleSubmit}>
            <div className='relative'>
            
          <input
            type="text"
            name="Todo_list"
            placeholder="Add a task... "
            autoComplete="off"
            className=" w-full tracking-wide py-2 px-3 text-base hover:border-none todoinput"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          
          <button className='absolute bottom-2 right-4'><FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#bcbdbd",}} /> </button></div>
        </form> 
        
        
          
       
      
        <List items={items} setItems={setItems} deleteItem={deleteItem}  />
    </div>
  );
}

export default App;
