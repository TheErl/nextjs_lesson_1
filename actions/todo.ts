import { createAction } from '@reduxjs/toolkit';

export const ADD_TODO = 'todo/add';
export const REMOVE_TODO = 'todo/remove';
export const addTodo = createAction<string>(ADD_TODO);
export const removeTodo = createAction<string>(REMOVE_TODO);
