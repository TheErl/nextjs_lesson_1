import { NextPage } from "next";
import React from "react";
import TodoList from "components/TodoList";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { getTheme } from "selectors/theme";
import { createTheme, ThemeProvider } from "@mui/material";
import { Theme } from "types/theme";


const TodosPage: NextPage = () => {
  
    

    return (
        <>
            <Header/>
            <TodoList />
        </>
    );

};

export default TodosPage;