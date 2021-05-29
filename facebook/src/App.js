import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Feed from './components/Feed';
import Friends from './components/Friends';
import Header from './components/Header';
import Login from './components/Login';
import Messenger from './components/Messenger/Messenger';
import Pages from './components/Pages';
import Sidebaar from './components/Sidebaar';
import SignUp from './components/SignUp';
import Subscriptions from './components/Subscriptions';
import Widget from './components/Widget';

function App() {

  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [active, setActive] = useState("home")

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  useEffect(() => {
    if (location.pathname === '/') {
      setActive("home")
    }
    if (location.pathname === '/pages') {
      setActive("pages")
    }
    if (location.pathname === '/friends') {
      setActive("friends")
    }
    if (location.pathname === '/subscriptions') {
      setActive("subscriptions")
    }
  }, [location])
  return (

    <div className="App">
      {user ? (
        <>
          <Header active={active} />
          <div className="app__body">
            <Switch>
              <Route exact path='/'>
                <Sidebaar />
                <Feed />
                <Widget />
              </Route>
              <Route exact path='/pages'>
                <Sidebaar />
                <Pages />
                <Widget />
              </Route>
              <Route exact path='/friends'>
                <Sidebaar />
                <Friends />
                <Widget />
              </Route>
              <Route exact path='/subscriptions'>
                <Sidebaar />
                <Subscriptions />
                <Widget />
              </Route>
              <Route exact path='/account'>
                <Sidebaar />
                <Account />
                <Widget />
              </Route>
              <Route path='/messenger/:conversationId'>
                <Messenger />
              </Route>
          
            </Switch>
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
