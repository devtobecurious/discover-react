import './App.css';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import Header from '../shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <MoviesList></MoviesList>
    </div>
  );
}

export default App;
