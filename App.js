import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    name:"Dr. Mahfuz",
    job:"Singer"
  }
  var person2={
    name:"Eva Rahman",
    job:"Kokil kondi"
  }
  var style={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1 className="" style={style}>My heading:{person.name+" "+person.job}</h1>
          <h1 style={{backgroudColor:'cyan',color:'yellow'}}>My heading:{person2.name+" "+person2.job}</h1>
        </div>
      </header>
    </div>
  );
}
function Person()
{
  return <h1>Name:Sakib</h1>
}

export default App;
