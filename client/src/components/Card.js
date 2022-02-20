import React from 'react'
import '../assets/main.css'

function Card({ item, handleDragStart, handleDragEnter, getStyles, dragging }) {

    return (
        <div
            draggable
            key={item.id}
            onDragStart={(e) => { handleDragStart(e, item) }}
            // onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
            onDragEnter={dragging ? (e) => { handleDragEnter(e, item) } : null}
            className={dragging ? getStyles(item.id) : 'dnd-item'}
        >
            <strong>{item.name}</strong>
            <p>{item.desc}</p>
            <p><i>{item.image}-{item.assignedTo}</i></p>
        </div>
    )
}

export default Card;
