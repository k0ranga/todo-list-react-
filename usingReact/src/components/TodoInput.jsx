import {useState} from "react";

import { TextField, Button, Stack } from "@mui/material";

export default function TodoInput({setTodos}){
    console.log("TodoInput is rendering");

    const [text, setText] = useState("");

    function addTodo(){
        if(!text.trim()) return;

        setTodos(prev => [...prev,{
            id: Date.now(),
            text,
            completed: false
        }]);

        setText("")
    }

    return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Add Todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button variant="contained" onClick={addTodo}>
        Add
      </Button>
    </Stack>
  );

}