import logo from './logo.svg';
import './App.css';
import DragNDrop from './components/DragNDrop';

const data = [
  {title: 'To-Do', items: ['1', '2', '3']},
  {title: 'Doing', items: ['4', '5']},
  {title: 'Done', items: []}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="top-nav">Qwasarello</div>
        <DragNDrop data={data} />

        {/* <div className="top-nav">Qwasarello</div>
        <div className="drag-n-drop">
          {data.map((grp, grpI) => (
            <div key={grp.title} className="dnd-group">
              <div className="group-title">{grp.title}</div> 
              {grp.items.map((item, itemI) => (
                <div draggable key = {item} className="dnd-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div> */}

        {/* <div className="drag-n-drop">
          
          Column 1
          <div className="dnd-group">
            <div className="group-title">To-Do</div> 
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>

          Column 2
          <div className="dnd-group"> 
          <div className="group-title">Doing</div> 
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 4</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>

          Column 3
          <div className="dnd-group">
            <div className="group-title">Doing</div> 
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>          
        </div> */}

      </header>
    </div>
  );
}

export default App;
