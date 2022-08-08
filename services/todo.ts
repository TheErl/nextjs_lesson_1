import { Todo } from "types/todo";

export const postTodo = async (title: string) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method: 'POST',
        body: JSON.stringify({
          title,
          body: title,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return response.json();
};

export const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
};

