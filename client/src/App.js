// import React, { useEffect, useState } from 'react'
import React from 'react'
import './assets/main.css'
import DragNDrop from './components/DragNDrop';

const api_data = [
    { id: '1', name: 'Todo 1', desc: 'this is some description', assignedTo: 'User 1', image: 'path', status: 'To Do', createdAt: '' },
    { id: '2', name: 'Todo 2', desc: 'this is some description', assignedTo: 'User 2', image: 'path', status: 'To Do', createdAt: '' },
    { id: '3', name: 'Todo 3', desc: 'this is some description', assignedTo: 'User 3', image: 'path', status: 'To Do', createdAt: '' },
    { id: '4', name: 'Todo 4', desc: 'this is some description', assignedTo: 'User 1', image: 'path', status: 'To Do', createdAt: '' },
    { id: '5', name: 'Todo 5', desc: 'this is some description', assignedTo: 'User 2', image: 'path', status: 'Doing', createdAt: '' },
    { id: '6', name: 'Todo 6', desc: 'this is some description', assignedTo: 'User 3', image: 'path', status: 'Doing', createdAt: '' },
    { id: '7', name: 'Todo 7', desc: 'this is some description', assignedTo: 'User 1', image: 'path', status: 'Doing', createdAt: '' },
    { id: '8', name: 'Todo 8', desc: 'this is some description', assignedTo: 'User 2', image: 'path', status: 'Doing', createdAt: '' },
    { id: '9', name: 'Todo 9', desc: 'this is some description', assignedTo: 'User 3', image: 'path', status: 'Done', createdAt: '' },
]


function App(props) {
    // const [data, setData] = useState({})

    // const filter = data => {
    //   // filter to three columns
    //   let res = data2.reduce((acc, cur)=>{
    //     let key = cur.status
    //     if(!acc[key]) {
    //       acc[key] = []
    //     }
    //     acc[key].push(cur)

    //     return acc
    //   }, {})
    // !set the data
    // setData(res)
    // }
    // TODO OPTION LOAD ONE going to have to load data like this
    // useEffect(()=>{
    //   fetch('some/api').then(res=>res.json()).then(res=>filter(res))
    // }, [])

    // TODO OPTION LOAD TWO or LIke this TO SHOW WHAT ASYNC/AWAIT LOOKS LIKE
    // const loadData = async() =>{
    //   let res = await fetch('/data')
    //   let result = res.json()
    //   filter(result)
    // }
    // useEffect(()=>{
    //   loadData()
    // }, [])

    return (
        <div className="App">
            <header className="App-header">
            {/* <header> */}
                <h1>Qwasrello</h1>
            </header>
            <section>
                <DragNDrop data={api_data} />
            </section>
        </div>
    );
}

export default App;
