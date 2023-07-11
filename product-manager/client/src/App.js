import Form from "./Components/Form/Form";

import Product from "./Components/Product/Product";

import { Routes, Route } from 'react-router-dom';

function App() {

  return (

      <Routes>            
        
        <Route exact path="/" element={ <Form/> } />

        <Route path="/product/:id" element={ <Product/> } />

      </Routes>

  );

}

export default App;
