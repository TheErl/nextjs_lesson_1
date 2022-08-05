import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo } from 'slices/todo';
import { Todo } from 'types/todo';

const TodoItem = ({id, title}: Todo) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(deleteTodo(id));
	};

	// useEffect(() => {
	// 	console.log('mounted');
	// 	return () => { 
	// 		console.log('unmounted', id, text);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	console.log('updated');
	// });

	// useEffect(() => {
	// 	console.log('updated text');
	// }, [text]);

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
