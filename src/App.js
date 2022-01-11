import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
import Auth from './presentation/Auth/Auth';
import Header from './containers/Header/Header';
import { getUser, logout } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser);

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/auth/:action">
            <Auth />
          </Route>
          <Route exact path="/">
            {currentUser && (
              <>
                <h2>Signed In</h2>
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
