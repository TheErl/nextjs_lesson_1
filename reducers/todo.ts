import { AnyAction, Reducer } from 'redux';
import { uniqueId } from 'lodash';
import { ADD_TODO,REMOVE_TODO } from '../actions/todo';
import { Todo } from '../types/todo';

type TodoState = {
  todos: Todo[];
};

const todoReducer: Reducer<TodoState, AnyAction> = (state = { todos: [] }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, {
        id: uniqueId(), 
        text: action.payload,
      }] };
    case REMOVE_TODO:
      console.log(action);
    default:
      return state;
  }
};

export default todoReducer;
