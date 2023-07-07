import React from 'react';
import Form from './Components/Form/Form'
import Result from './Components/Result/Result';
import { Routes, Route } from 'react-router-dom';
import Wrapper from './Components/Wrapper/Wrapper';

function App() {

  

  return (

      <div>
     
        <Routes>

          <Route path="/" element={<Wrapper><Form/></Wrapper>} />

          <Route path="/people" element={<Wrapper><Result/></Wrapper>} />

          <Route path="/planets" element={<Wrapper><Result/></Wrapper>} />

          <Route path="/starships" element={<Wrapper><Result/></Wrapper>} />

        </Routes>

      </div>

  );

}

export default App;
