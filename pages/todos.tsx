// import { addTodo } from "actions/todo";
import TodoItem from "components/todoItem";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "selectors/todo";
import { addTodo, deleteTodo } from "slices/todo";
import { Todo } from "types/todo";
// import { Todo } from "types/todo";


const TodosPage: NextPage = () => {


    const [text, setText] = useState('');
    
    const todos: Todo[] = useSelector(getTodos);

    const dispatch = useDispatch();

    // const handleClick = useCallback(() => {
    //     dispatch(addTodo({text : text}));
    // }, [text,dispatch]);

    const handleClick = () => {
        dispatch(addTodo(text));
    };

    const removeTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <>
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add Todo</button>
        </div>
        <div> 
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button className="remove-task-button" onClick={() => { removeTodo(todo.id); }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );

};

export default TodosPage;