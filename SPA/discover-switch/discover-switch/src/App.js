import { Route } from "react-router";
import { Routes } from "react-router-dom";
import './App.css';
import { About } from "./components/About";
import { User } from "./components/User";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <h1>Discover Switch</h1>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/:user" element={<User />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
