import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebaar from './components/Sidebaar';
import SignUp from './components/SignUp';
import Widget from './components/Widget';

function App() {

  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  
  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    
    <div className="App">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebaar />
            <Feed />
            <Widget />
          </div>
        </>

      ) : (
        <>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          </Switch>
          </>
        )}
    </div>
  );
}

export default App;
