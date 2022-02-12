import React, {useState, useRef} from 'react';

function DragNDrop({data}) {

    // Set list in a stata 'useState(data)' so we can update and make changes
    const [list, setList] = useState(data);

    // Stays constant between re-renders
    const dragItem = useRef();

    const handleDragStart = (e, params) => {
        console.log('drag starting...', params);
        dragItem.current = params;

    }

    return (
        <div className="drag-n-drop">
          {list.map((grp, grpI) => (
            <div key={grp.title} className="dnd-group">
              <div className="group-title">{grp.title}</div> 
              {grp.items.map((item, itemI) => (
                <div draggable onDragStart={(e) => {handleDragStart(e,{grpI, itemI})}} key = {item} className="dnd-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

    );
}

export default DragNDrop;