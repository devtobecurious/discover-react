import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from '../../features/users/authentication/Authentication';
import Header from '../../shared/components/header';
import DroneList from '../../features/drones/DroneList/DroneList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <header className="App-header">
        <Header></Header>
      </header>
      <Routes>
        <Route exact path="/login" component={Authentication} />
        <Route exact path="/drones" component={DroneList} />
      </Routes>
    </div>
  );
}

export default App;
