import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp(){
    console.log("Redndering the todoApp");

    const [todos, setTodos] = useState([]);

    return(
        <>
            <TodoInput setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );


};

