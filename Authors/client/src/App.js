import { Routes, Route } from 'react-router-dom';

import AllAuthors from './Components/AllAuthors/AllAuthors';

import Edit from './Components/Edit/Edit';

import Create from './Components/Create/Create';

import Wrapper from './Components/Wrapper/Wrapper';

function App() {

  return (

    <Routes>

        <Route path="/" element={ <Wrapper><AllAuthors/></Wrapper> } ></Route>

        <Route path="/authors/:id" element={ <Edit/> }></Route>

        <Route path="/authors/new" element={ <Create/> } />

    </Routes>

  );

}

export default App;
