import { useState } from 'react';
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";
import { UnderNav } from "./components/underNav";

import "./App.css";
import React from "react";

function App() {

  const [search, setSearch] = useState('');
  const [category , setCategory] = useState('');

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  }

  const searching = (value) => {
    console.log(value);
    setSearch(value);
  }



  return (
    <div className="main">
      <Header searching={searching}/>
      <UnderNav />
      <div className="flex">
        <Sidebar catSelection={catSelection}/>
        <List search={search} category={category}/>
      </div>
    </div>
  );
}

export default App;