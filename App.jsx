import React, { useState } from 'react'
import ToDolist from './ToDolist'


 const App = () => {
  const [Iname, Isetname] = useState("")
  const [Addname, Addsetname] = useState([])
  const InputEvent =(event)=>{
    Isetname(event.target.value)

  }
  const Inputbtn = () =>{
    Addsetname((oldvalue)=>{
      return [...oldvalue, Iname]

    })
    Isetname('');
  }
  const deleteItem =(id)=>{
    console.log("work")
    Addsetname((oldvalue)=>{
      return oldvalue.filter((arrElem, index)=>{
        return index !== id; 
      })
    })

}
  
  return (
    <>
    <div className='main_div'>
    <div className='center_div'>
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type='text' placeholder='Add a items' onChange={InputEvent} value={Iname} />
    <button onClick={Inputbtn}> + </button>
    <ol>
      {/* <li> {Addname} </li> */}
      {Addname.map((items, index)=>{
        return <ToDolist text ={items} key = {index} id = {index} onSelect = {deleteItem} />
      })}
    </ol>

    </div>

    </div>
    </>

  )
}
export default App;