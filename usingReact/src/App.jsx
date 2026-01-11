import { useState } from 'react'
import Hello from './helloComp'
// import Child from './callBack'
import PromiseMe from './promise'

import './App.css'

function Here(){
  let count =0;
  return(
    <>
      <button onClick={ ()=> count++}>
        {count}
      </button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
     <div>
       <p>Counter first</p>
       <button onClick={() => {setCount(count+1)}}></button>
       <p>count: {count}</p>
     </div>
      <Here />
    </>
  )
}

export default App
