import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { Todo } from 'types/todo';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
const TodoItem: React.FC<{todo: Todo, onRemove: (id: string) => void}> = ({todo: {title, id}, onRemove}) => {


	const handleRemove = () => {
		onRemove(id);
	};

	return (
		<ListItem
            secondaryAction={
            	<IconButton edge="end" aria-label="delete" onClick={handleRemove}>
            		<DeleteIcon color='error' />
                </IconButton>
            }
        >
        	<ListItemAvatar>
                <Avatar >
                    <TaskIcon color="primary"/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary="Name"
                secondary={title}
            />
        </ListItem>
	);
};

export default TodoItem;
