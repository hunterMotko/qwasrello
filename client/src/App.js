
import './App.css';

import DragNDrop from './components/DragNDrop';

const data = [
  { title: 'To Do', items: ['1', '2', '3'] },
  { title: 'Doing', items: ['4', '5'] },
  { title: 'Done', items: ['6', '7'] }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
