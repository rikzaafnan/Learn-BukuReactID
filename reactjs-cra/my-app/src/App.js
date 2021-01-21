import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Article from './Article'
import Rendering from './Rendering'
import Conditional from './Conditional'
import List from './List'
import EventButton from './EventButton'
import AllEvent from './AllEvent';
import BlueButton from './BlueButton';
import Counter from './Counter';
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'
import TestControlledForm from './TestControlledForm'
import FormInput from './FormInput';
import FormMultiple from './FormMultiple';
import HelloPropTypes from './HelloPropTypes'
import PropTypesButton from './PropTypesButton'
import { Switch, Route, NavLink, Redirect, Prompt } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Post from './pages/Post'
import Member from './pages/Member'
import Login from './pages/Login'
import GuardRoute from './components/GuardRoute'
import React from 'react'

// const Home = () => <h2>Halaman Home</h2>
// const About = () => <h2>Halaman About</h2>

function App() {
  function info () {
    alert("Lorem ipsum sit dolor emet")
  }

  const [isLogin, setLogin] = React.useState(false)

  // let isLogin = true
  // let Member = "rikza"

  return (
    <div className="App">
      <ul className="menu">
        <li><NavLink to="/" activeClassName="active" exact >Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active" >About</NavLink></li>
        <li><NavLink to="/member" activeClassName="active" >Member</NavLink></li>
        <li><NavLink to="/category" activeClassName="active" >Category</NavLink></li>
        <li><NavLink to="/login" activeClassName="active" >Login</NavLink></li>
      </ul>
      <Switch>
        <Route path="/login" >
          <Login setLogin={setLogin} />
        </Route>
        <Route path="/post/:id" >
          <Post/>
        </Route>
        <Route path='/category'>
          <Category/>
        </Route>
        <Route path='/about'>
          <About/>
          
          <Prompt message="Are you sure you want to leave?" />
        </Route>
        <GuardRoute path="/member" isLogin={isLogin} >
          <Member/>
        </GuardRoute>
        {/* <Route path='/member'>
          { isLogin ? <h4>Selamat datang member {Member} </h4> : <Redirect to="/" /> }
          
        </Route> */}
        <Route path='/'>
          <Home/>
        </Route>
        
      </Switch>


      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Hello name="sama aja kah" name2="ini props2"/> */}
        {/* <Hello name2="ini props2"/> */}
      {/* </header> */}
      {/* <Article userLogin = "sudah login" /> */}
      {/* <Rendering/> */}
      {/* <Conditional userNameProps="rikza" />

      <List/>

      <EventButton/>

      <AllEvent/>

      <BlueButton onCustomClick={info} caption="Tampilkan Info"/>

      <Counter/>
      <UncontrolledForm/> */}
      {/* <ControlledForm/> */}

      {/* <TestControlledForm/> */}

      {/* <FormInput/> */}

      {/* <FormMultiple/> */}

      {/* <HelloPropTypes name={[1,2,3]} />
      <PropTypesButton/> */}
    </div>
  );
}

export default App;
