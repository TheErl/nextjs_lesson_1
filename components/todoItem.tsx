import React from 'react';
import { Todo } from 'types/todo';

const TodoItem: React.FC<{todo: Todo, onRemove: (id: string) => void}> = ({todo: {title, id}, onRemove}) => {


	const handleRemove = () => {
		onRemove(id);
	};

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					handleRemove();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
