import { useState } from 'react'
import './App.css'
import Category from './component/Category'
import Menu from './component/Menu'
import data from "./component/data"
const allCategorie =["all",...new Set(data.map((item)=>item.category))]
function App() {
  const[menu,setManu]=useState(data)
const[categories,setCategories]=useState(allCategorie)

const filterItems=(category)=>{
  if(category === "all"){
    setManu(data)
    return;
  }

  const newItems=data.filter((item)=>item.category === category)
  setManu(newItems)
}
  return (
    <div className="app">
      <div className="manu">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Category categories={categories} filterItems={filterItems}/>
        {
          menu.map((item,index)=>(
          
            <Menu key={index} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default App
