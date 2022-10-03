import React,{useState} from 'react'
import './ToDo.css'
const ToDo = () => {
const [item,setItem]=useState('')
const [list,setList]=useState([])
const changeHandler=(e)=>{
    setItem(e.target.value)
}

const addToDoHandler=()=>{
    const l={
        id:Math.floor(Math.random ()* 1000),
        content:item
    }
    setList(oldlist=>[...oldlist,l])
    setItem("")
}
const deleteHandler=(id)=>{
    console.log(id)
    const newArr=list.filter(l2=>l2.id!==id)
    setList(newArr)
}


  return (  
    <div>
        <div className='todo-input'>
            <input type="text" value={item} onChange={changeHandler}/>
            <button onClick={addToDoHandler}>Add To List</button>
        </div>
        <div>
            {list.map(i=><h4 key={i.id}>{i.content} <button onClick={()=>deleteHandler(i.id)}>❌</button></h4>)}
        </div>
    </div>
  )
}

export default ToDo