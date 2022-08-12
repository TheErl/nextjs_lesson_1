import { NextPage } from "next";
import React from "react";

import useTodos from "hooks/useTodos";
import TodoList from "components/TodoList";


const TodosPage: NextPage = () => {


    return (
        <>
        <TodoList />
        </>
    );

};

export default TodosPage;