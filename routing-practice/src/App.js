import Home from './Components/Home/Home'
import Integer from './Components/Integer/Integer';
import { Routes, Route } from 'react-router-dom';
import Hello from './Components/Hello/Hello';

function App() {

  return (

    <div>


      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/:integer" element={<Integer/>} />

        <Route path="/hello/:fontColor/:backgroundColor" element={ <Hello/> } />

      </Routes>
 
    </div>

  );
}

export default App;
