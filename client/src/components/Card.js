import React from 'react'

import '../assets/main.css'


function Card({ item }) {


    return (
        <div
            // draggable
            // onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
            // onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
            key={item.id}
            // className={dragging ? getStyles({ grpI, itemI }) : 'dnd-item'}
            className={'dnd-item'}
        >
            <strong>{item.name}</strong>
            <p>{item.desc}</p>
            <p>{item.image}</p>
            <p>{item.assignedTo}</p>
            <p>{item.desc}</p>
        </div>
    )
}

export default Card;