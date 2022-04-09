import './App.css';
import Listing from './components/Listing';
import json from './data/data.json';

function App() {
  return (
    <div className="item-list">
      <Listing item={json}/>
    </div>
  );
}

export default App;
