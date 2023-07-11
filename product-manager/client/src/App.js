import Form from "./Components/Form/Form";

import Product from "./Components/Product/Product";

import Wrapper from "./Components/Wrapper/Wrapper";

import { Routes, Route } from 'react-router-dom';

import EditProduct from "./Components/EditProduct/EditProduct";

function App() {

  return (

      <Routes>            
        
        <Route exact path="/" element={ <Wrapper><Form/></Wrapper> } />

        <Route path="/product/:id" element={ <Product/> } />

        <Route path="/edit/:id" element={ <EditProduct/> }></Route>

      </Routes>

  );

}

export default App;
