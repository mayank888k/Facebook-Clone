import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Pages from './components/Pages';
import Sidebaar from './components/Sidebaar';
import SignUp from './components/SignUp';
import Widget from './components/Widget';

function App() {

  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [active,setActive] = useState("home")

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  useEffect(()=>{
    if(location.pathname === '/'){
      setActive("home")
    }
    if(location.pathname === '/pages'){
      setActive("pages")
    }
  },[location])
  return (

    <div className="App">
      {user ? (
        <>
          <Header active={active} />
          <div className="app__body">
            <Sidebaar />
            <Switch>
              <Route exact path='/'>
                <Feed />
              </Route>
              <Route exact path='/pages'>
      
                <Pages />
              </Route>
              <Route exact path='/account'>
                <Account />
              </Route>

            </Switch>
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
