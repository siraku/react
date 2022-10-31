import logo from './logo.svg';
import './App.css';

function Aa(){
  return (
    <div>
      may I ask you a question
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit aaaaa <code>src/App.js</code>save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
      <Aa/>
      </header>
    </div>
  );
}

export default App;
