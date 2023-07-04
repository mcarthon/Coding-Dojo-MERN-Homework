import Tab from './Components/Tab'
import React from 'react';
import './App.css';

function App() {

  const tabItems = [

    { label: "Label One", content: "Content for Tab One" },

    { label: "Label Two", content: "Content for Tab Two" },

    { label: "Label Three", content: "Content for Tab Three" }

  ];

  return (
    <div className="App">
      <Tab items={ tabItems }></Tab>
    </div>
  );
}

export default App;
