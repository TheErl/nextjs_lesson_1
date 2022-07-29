import { createAction } from '@reduxjs/toolkit';

export const ADD_TODO = 'todo/add';

export const addTodo = createAction<string>(ADD_TODO);
