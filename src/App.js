import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
import Authenticate from './presentation/Authenticate/Authenticate';
import Header from './presentation/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Authenticate}>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
