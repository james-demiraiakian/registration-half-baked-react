import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
import Authenticate from './presentation/Authenticate/Authenticate';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/signin" component={Authenticate}>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
