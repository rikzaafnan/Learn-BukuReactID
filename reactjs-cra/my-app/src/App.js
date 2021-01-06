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

function App() {
  function info () {
    alert("Lorem ipsum sit dolor emet")
  }

  return (
    <div className="App">
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

      <TestControlledForm/>

    </div>
  );
}

export default App;
