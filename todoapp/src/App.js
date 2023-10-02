import { GrAdd } from "react-icons/gr";

import Hero from "./Components/Hero";
import List from "./Components/List";
import Logo from "./Components/Logo";
import "./App.css";

function App() {
  return (
    <div >
      <Hero />
      <Logo />
        <form className="relative mt-2 rounded-md drop-shadow-lg flex items-center justify-center border-0 hover:border-none ">
            
            <button className="fixed justify-end">
              <GrAdd />
            </button>
          
          <input
            type="text"
            name="Todo_list"
            placeholder="Add a task..."
            autoComplete="off"
            className=" py-2 px-12 text-base todoinput"
          />
        </form>
      
        <List />
    </div>
  );
}

export default App;
