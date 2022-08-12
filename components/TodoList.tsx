import TodoItem from "components/TodoItem";
import useTodos from "hooks/useTodos";
import TodoForm from "./TodoForm";

const TodoList = () => {

    const { todos, handleAddTodo, handleRemoveTodo } = useTodos();
    
    return ( 
        <>
            <TodoForm onSubmit={handleAddTodo} />
            <div> 
                <ul>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;