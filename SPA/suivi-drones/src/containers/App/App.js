import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from '../../features/users/authentication/authentication';
import Header from '../../shared/components/header';
import DroneList from '../../features/drones/DroneList/DroneList';
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <header className="App-header">
        <Header></Header>
      </header>
      <Switch>
        <Route exact path="/login" component={Authentication} />
        <Route exact path="/drones" component={DroneList} />
      </Switch>
    </div>
  );
}

export default App;
