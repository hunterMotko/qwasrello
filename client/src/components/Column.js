import React from 'react'
import '../assets/main.css'
import Card from './Card'

function Column({ title, items, handleDragStart, handleDragEnter, getStyles, dragging }) {
    return (
        <div
            key={title}
            className='dnd-group'
            onDragEnter={dragging && !items.length ? (e) => handleDragEnter(e, {id:-1, status:title}) : null}
        >
            <div className='group-title'>{title}</div>

            {items.map(item => (
                <Card
                    key={item.id}
                    item={item}

                    handleDragStart={handleDragStart}
                    handleDragEnter={handleDragEnter}
                    getStyles={getStyles}
                    dragging={dragging}
                />
            ))}
        </div>
    )
}

export default Column;
