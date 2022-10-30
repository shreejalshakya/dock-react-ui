import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        This is sample docker compose test application. Its a React UI app.
      </header>

      <section>
        <Blogs />
      </section>
    </div>
  );
}

export default App;
