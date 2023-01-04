import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videos from './Videos';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Sidebar/>
      <Videos/>
      </Router>
    </div>
  );
}

export default App;
