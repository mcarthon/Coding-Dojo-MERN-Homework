import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import SubContents from './Components/Subcontents/Subcontents';
import Advertisement from './Components/Advertisement/Advertisement';
 
                
function App() {
  return (
    <div className={ styles.app }>
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

