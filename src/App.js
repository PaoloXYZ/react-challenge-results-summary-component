import './App.css';
import Card from './ResultCard.js';
import Summary from './Summary.js';

function App() {
  return (
    <div className="App md:flex md:items-center justify-center md:h-screen rounded-md">
      <div className="md:flex md:flex-row text-center md:shadow-2xl rounded-3xl">
        <Card />
        <Summary />
      </div>
    </div>
  );
}

export default App;
