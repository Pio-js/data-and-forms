import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Countries from './pages/Countries';
import {useState, useEffect} from 'react';
import AuthCheck from './components/AuthCheck';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if(token != null){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, []);

  let countries = <Login setIsLoggedIn = {setIsLoggedIn}/>;
  if(isLoggedIn){
    countries = <Countries/>;
  }

  let personalRoutes =[
    <Route path = '/personal/home'><h1>Test</h1></Route>,
    <Route path = '/personal/emails'>{countries}</Route>,
    <Route path = '/personal/dashboard'><h1>Test2</h1></Route>,
    <Route path = '/personal/profile'>{countries}</Route>
  ];

  //let authCheck = <Login setIsLoggedIn = {setIsLoggedIn}/>;

  return (
    <Switch>
      <Route path = "/login">
        <Login setIsLoggedIn = {setIsLoggedIn}/>
      </Route>

      <Route path = "/countries">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {countries}
        </AuthCheck>
      </Route>

      <Route path = "/personal">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {personalRoutes}
        </AuthCheck>
      </Route>

      <Route exact path = "/">
        <div className="App">
          <h1>Welcome on Countries & Login App!</h1>
        </div>
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {countries}
        </AuthCheck>
      </Route>
    </Switch>
  );
}

export default App;
