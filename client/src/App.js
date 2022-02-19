import React, {useEffect, useState} from 'react'
import './App.css';

import DragNDrop from './components/DragNDrop';

const data = [
  { title: 'To Do', items: ['1', '2', '3'] },
  { title: 'Doing', items: ['4', '5'] },
  { title: 'Done', items: ['6', '7'] }
]
// TODO ideal structure make the frontend cards handle this data
// const data2 = [
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'To Do',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Doing',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
//   {id:'', name:'', description:'', assignedTo:'', image:'', status: 'Done',createdAt: ''},
// ]



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
        <h1>Qwasarello</h1>
      </header>
      <section className='App-section'>
        <DragNDrop data={data} />
      </section>
    </div>
  );
}

export default App;
