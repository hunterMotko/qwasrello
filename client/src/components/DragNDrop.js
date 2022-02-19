// import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useEffect } from 'react';

import '../assets/main.css'

import Column from './Column'

function DragNDrop({ data }) {



    const [list,] = useState(data);
    // const [dragging, setDragging] = useState(false);

    // const dragItem = useRef();
    // const dragNode = useRef();

    // const handleDragStart = (e, params) => {
    //     console.log("drag starting..", params);
    //     dragItem.current = params;
    //     dragNode.current = e.target;
    //     dragNode.current.addEventListener('dragend', handleDragEnd);
    //     setTimeout(() => {
    //         setDragging(true)
    //     }, 0)
    //     setDragging(true);
    // }

    // const handleDragEnter = (e, params) => {
    //     console.log("Entering Drag..")
    //     const currentItem = dragItem.current;
    //     if (e.target !== dragNode.current) {
    //         console.log("Target is not the same")
    //         setList(oldList => {
    //             let newList = JSON.parse(JSON.stringify(oldList));
    //             newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
    //             dragItem.current = params
    //             return newList
    //         })
    //     }
    // }

    // const handleDragEnd = () => {
    //     console.log("Ending drag..")
    //     setDragging(false);
    //     dragNode.current.removeEventListener('dragend', handleDragEnd)
    //     dragItem.current = null;
    //     dragNode.current = null;
    // }

    // const getStyles = (params) => {
    //     const currentItem = dragItem.current;
    //     if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
    //         return 'current dnd-item'
    //     }
    //     return 'dnd-item'
    // }

    const [columns, setColumns] = useState([])

    const uniqueColumns = data => {
        let res = [];
        data.forEach(val => {
            if (!res.includes(val.status))
                res.push(val.status)
        })
        setColumns(res)
    }

    useEffect(() => {
        // fetch('some/api').then(res => res.json()).then(res => filter(res))
        uniqueColumns(data)
    }, [])


    // return (
    //     <div className="drag-n-drop">

    //         {columns.map((col) => {
    //             <Column
    //                 title={col}
    //                 items={data.filter(e => e.status === col)}
    //             />
    //         })}

    //     </div>
    // )




    return (
        <div className='drag-n-drop'>
            {columns.map((grp, grpI) => (

                <Column
                    title={grp}
                    items={data.filter(e => e.status === grp)} />

                // <div
                //     key={grp}
                //     className='dnd-group'
                // >
                //     <div className='group-title'>{grp}</div>
                //     {data.filter(e => e.status === grp).map((item, itemI) => (
                //         <div
                //             key={item.id}
                //             className="dnd-item"
                //         >

                //             {item.name}
                //         </div>
                //     ))}
                // </div>
            ))}
        </div>
    );





    // return (
    //     <div className='drag-n-drop'>
    //         {columns.map((grp, grpI) => (
    //             <div
    //                 key={grp}
    //                 className='dnd-group'
    //             >
    //                 <div className='group-title'>{grp}</div>
    //                 {data.filter(e => e.status === grp).map((item, itemI) => (
    //                     <div
    //                         key={item.id}
    //                         className="dnd-item"
    //                     >

    //                         {item.name}
    //                     </div>
    //                 ))}
    //             </div>
    //         ))}
    //     </div>
    // );


}

export default DragNDrop;