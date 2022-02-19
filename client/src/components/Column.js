import React from 'react'

import '../assets/main.css'

import Card from './Card'

function Column({ title, items }) {
    console.log(title, items)

    return (
        // <div
        //     key={title}
        //     className='dnd-group'
        // // onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, { grpI, itemI: 0 }) : null}
        // >
        //     <div className="group-title">{title}</div>
        //     {items.map((item, itemI) => (
        //         <Card item={item} />
        //     ))}
        // </div>

        <div
            key={title}
            className='dnd-group'
        >
            <div className='group-title'>{title}</div>
            {items.map((item, itemI) => (
                
                <Card item={item}/>
                
                // <div
                //     key={item.id}
                //     className="dnd-item"
                // >

                //     {item.name}
                // </div>
            ))}
        </div>


    )
}

export default Column;