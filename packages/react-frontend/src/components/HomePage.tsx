import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable"
 
const tempTasks = [
  {
      name: "Make Frontend",
      category: "CSC 307",
      completed: false
  },
  {
      name: "Make Backend",
      category: "CSC 307",
      completed: true
  }
];

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Nav />
      <h1>
        Home Page
      </h1>

    </div>
  )
}

export default HomePage