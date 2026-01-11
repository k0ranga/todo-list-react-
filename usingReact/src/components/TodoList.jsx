import {useState} from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem"

export default function({todos, setTodos}){
    console.log("TodoList rendered");

    return(
        <List>
            {todos.map(todo =>(
                <TodoItem key={todo.item} todo={todo} setTodos={setTodos} />
            ))}
        </List>
    );
}