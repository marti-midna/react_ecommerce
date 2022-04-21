import { useState } from 'react';
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";
import { UnderNav } from "./components/underNav";

import "./App.css";
import React from "react";

function App() {

  

  const [category , setCategory] = useState('');

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  }


  return (
    <div className="main">
      <Header />
      <UnderNav />
      <div className="flex">
        <Sidebar catSelection={catSelection}/>
        <List category={category}/>
      </div>
    </div>
  );
}

export default App;