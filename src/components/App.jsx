import H1 from './H1.jsx'
import '../style/style.css'
import Clock from './Clock.jsx';

function App() {
  return (
    <div className="App">
      <H1 value="Clock" id="clock-header"/>
      <div id="clock-div">
        <Clock />
      </div>
    </div>
  );
}

export default App;
