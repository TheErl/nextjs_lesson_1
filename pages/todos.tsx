import { addTodo } from "actions/todo";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "selectors/todo";


const TodosPage: NextPage = () => {

    // const { data, error } = useSWR('https://fakestoreapi.com/products?limit=5',fetcher);

    const [text, setText] = useState('');
    
    const todos = useSelector(getTodos);

    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(addTodo(text));
    }, [text]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        setText(event.target.value);
    };

    return (
        <>
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add Todo</button>
        </div>
        <div> { todos?.map((todo) => (
            <div key={todo.id}>
                {todo.text}
            </div>
        ))} </div>
        </>
    );

};

export default TodosPage;