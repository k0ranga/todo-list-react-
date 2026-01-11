import { useState } from 'react'
import Hello from './helloComp'
// import Child from './callBack'
import PromiseMe from './promise'
import TodoApp from "./components/TodoApp";
import './App.css'

import {Container, Typography} from "@mui/material";


function App() {
  const [count, setCount] = useState(0);


  return (
    <Container maxWidth="sm">
      <Typography variant='h4' sx={{my : 3}}>
          React Todo List
      </Typography>
      <TodoApp />
    </Container>
  )
}

export default App
