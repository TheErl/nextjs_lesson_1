// import { addTodo } from "actions/todo";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "selectors/todo";
import { addTodo, deleteTodo, fetchTodos } from "slices/todo";
import { Todo } from "types/todo";
import TodoItem from "components/TodoItem";
// import { Todo } from "types/todo";


const TodosPage: NextPage = () => {


    const [text, setText] = useState('');

    const todos: Todo[] = useSelector(getTodos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos() as never);
    }, []);
    
    

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
                    <TodoItem key={todo.id} {...todo}/>
                ))}
            </ul>
        </div>
        </>
    );

};

export default TodosPage;