import './App.scss';
import { Card } from './components';

function App() {
  let i = 0
  return (
    <div onLoad={() => console.log(i++)} className="App">
      <Card />
    </div>
  );
}

export default App;
