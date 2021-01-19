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
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

// const Home = () => <h2>Halaman Home</h2>
// const About = () => <h2>Halaman About</h2>

function App() {
  function info () {
    alert("Lorem ipsum sit dolor emet")
  }

  return (
    <div className="App">
      <ul className="menu">
        <li><NavLink to="/" activeClassName="active" exact >Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active" >About</NavLink></li>
        <li><NavLink to="/member" activeClassName="active" >Member</NavLink></li>
      </ul>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/member'>
          <Redirect to="/" />
        </Route>
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
