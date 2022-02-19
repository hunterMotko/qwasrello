import React from 'react'

import '../assets/main.css'

import Card from './Card'

function Column({ title, items }) {
    console.log(title, items)

    return (
        <div
            key={title}
            className='dnd-group'
        >
            <div className='group-title'>{title}</div>
            {items.map(item => (
                <Card item={item} />
            ))}
        </div>


    )
}

export default Column;
