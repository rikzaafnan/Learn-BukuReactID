import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Article from './Article'
import Rendering from './Rendering'
import Conditional from './Conditional'
import List from './List'

function App() {
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
      <Conditional userNameProps="rikza" />

      <List/>
    </div>
  );
}

export default App;
