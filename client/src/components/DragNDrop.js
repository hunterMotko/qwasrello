// import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef, useEffect } from 'react';

import '../assets/main.css'

import Column from './Column'

function DragNDrop({ data }) {

    const [cards, setCards] = useState(data);

    const [columns, setColumns] = useState([])

    const uniqueColumns = cards => {
        let res = [];
        cards.forEach(val => {
            if (!res.includes(val.status))
                res.push(val.status)
        })
        setColumns(res)
    }

    useEffect(() => {
        // fetch('some/api').then(res => res.json()).then(res => filter(res))
        uniqueColumns(cards)
    }, [cards])



    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log("Starting drag...", e.target, params);

        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);

        //TODO setDragging both to true???
        setTimeout(() => {
            setDragging(true)
        }, 0)

        setDragging(true);
    }

    const handleDragEnter = (e, item) => {
        console.log("Entering Drag..", item)

        if (item.id !== dragItem.current.id) {
            const newItems = cards.map(e => {
                if (dragItem.current.id === e.id) {
                    return { ...e, status: item.status }
                }
                return e;
            });

            setCards(newItems);

        }
    }

    const handleDragEnd = () => {
        console.log("Ending drag...")

        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
        return 'dnd-item'
    }


    return (
        <div className='drag-n-drop'>
            {columns.map(col => (
                <Column
                    key={col}
                    title={col}
                    items={cards.filter(e => e.status === col)}
                    handleDragStart={handleDragStart}
                    handleDragEnter={handleDragEnter}
                    getStyles={getStyles}
                    dragging={dragging}
                />
            ))}
        </div>
    );
}

export default DragNDrop;
