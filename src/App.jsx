import logo from "/logo.png";
import "./App.css";
// import Clock from "./Clock.jsx";
import WorldClock from './WorldClock.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const timeZones = ['America/New_York', 'Europe/Madrid', 'Asia/Singapore'];

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <WorldClock clockData={timeZones} />
      </div>
    </>
  );
}

export default App;
