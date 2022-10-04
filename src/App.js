import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import DataTable from './components/DataTable';
import DataChart from './components/DataChart';
import StylingSheet from './components/StylingSheet';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/stylingsheet">Tailwind</Link>
        
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <DataTable/>
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <DataChart/>
        </Route>
        <Route path="/stylingsheet">
          <StylingSheet/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
