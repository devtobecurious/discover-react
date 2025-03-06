import { Suspense } from "react";
import "./App.css";
import { ListMovies } from "./movies/components/ListMovies";
import { ListeningBrowser } from "./trys/ListeningBrowser";
import { StatusBar } from "./trys/StatusBar";
import { Counter } from "./trys/Counter";

const Loading = () => <div style={{ color: "black" }}>waiting ...</div>;

function App() {
  const listMovies = <ListMovies />;
  return (
    <>
      <StatusBar></StatusBar>

      <Counter></Counter>

      <Suspense fallback={<Loading></Loading>}>{listMovies}</Suspense>
      <ListeningBrowser></ListeningBrowser>
    </>
  );
}

export default App;
