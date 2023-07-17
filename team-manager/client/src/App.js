import { Routes, Route } from 'react-router-dom';

import AllPlayers from './Components/AllPlayers/AllPlayers'

import Edit from './Components/Edit/Edit';

import NewPlayer from './Components/NewPlayer/NewPlayer';


function App() {  
  
  return(
  
    <>

      <Routes>

        <Route path="/" Component={ AllPlayers } />

        <Route path="/players/:id" Component={ Edit } />

        <Route path="/players/new" Component={ NewPlayer } />

        <Route path="/players/:gameNumber" Component={ PlayersStatus } />

      </Routes>

    </>

  );

}

export default App;