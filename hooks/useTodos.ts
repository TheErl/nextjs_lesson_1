import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "selectors/todo";
import { addTodo, deleteTodo, fetchTodosThunk } from "slices/todo";
import { Todo, TodoFormState } from "types/todo";

const useTodos = () => {
    // const [text, setText] = useState('');

    const todos: Todo[] = useSelector(getTodos);

    const dispatch = useDispatch();

    const handleAddTodo = ({ text }: TodoFormState) => {
        dispatch(addTodo(text));
    };

    const handleRemoveTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };


    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value);
    //     // dispatch(fetchTodosThunk() as never);
    // };

    return { todos, handleAddTodo, handleRemoveTodo };
};

export default useTodos;