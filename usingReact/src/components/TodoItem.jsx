import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ todo, setTodos }) {
  console.log("TodoItem rendered:", todo.text);

  function toggleTodo() {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  }

  function deleteTodo() {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      />
    </ListItem>
  );
}
