import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo } from 'slices/todo';
import { Todo } from 'types/todo';

const TodoItem = ({id, text}: Todo) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTodo(id)
		);
	};

	return (
		<li className="task-item">
			<div>
				{text}
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
