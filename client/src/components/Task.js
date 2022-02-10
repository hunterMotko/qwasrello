import React from "react"

function Task({ task }) {

    const handleDragStart = (e) => {
        console.log('drag starting...');
    }

    return (
        <div draggable onDragStart={(e) => {handleDragStart(e, {})}} key={task.id} className='dnd-item' >
            <div className="font-bold text-purple-500 text-xl mb-2">
                {task.name}
            </div>
            <div>
                {task.description}
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {task.status}
                </span>
            </div>
        </div>
    );


    // return (
    //     <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //         <div className="px-6 py-4">
    //             <div className="font-bold text-purple-500 text-xl mb-2">
    //                 {task.name}
    //             </div>
    //             <strong>{task.description}</strong>
    //         </div>
    //         <div className="px-6 py-4">
    //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    //                 {task.status}
    //             </span>
    //         </div>
    //     </div>
    // );
}

export default Task;
