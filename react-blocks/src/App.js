import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import SubContents from './Components/Subcontents/Subcontents';
import Advertisement from './Components/Advertisement/Advertisement';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;

