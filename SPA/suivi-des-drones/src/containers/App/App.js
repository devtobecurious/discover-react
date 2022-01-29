import AuthenticateUser from '../../features/User/AuthenticateUser/AuthenticateUser';
import MainRouting from '../../shared/routing/MainRouting';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <AuthenticateUser>
          <MainRouting></MainRouting>
        </AuthenticateUser>
      </div>
    </>
  );
}

export default App;
