import { Box, List } from "@mui/material";
import TodoItem from "components/TodoItem";
import useTodos from "hooks/useTodos";
import TodoForm from "./TodoForm";
  
const TodoList = () => {

    const { todos, handleAddTodo, handleRemoveTodo } = useTodos();
    
    return ( 
        <>
            <TodoForm onSubmit={handleAddTodo} />
            <Box p={4} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <List sx={{width:'54%'}}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo}/>
                ))}
                </List>
            </Box>
        </>
    );
};

export default TodoList;