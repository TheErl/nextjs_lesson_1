import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TodoFormState } from "types/todo";
import { Box, TextField } from "@mui/material";

const TodoForm:React.FC<{onSubmit: (formState:TodoFormState) => void}> = ({onSubmit}) => {

    const {register, handleSubmit, formState: { errors }, watch } = useForm<TodoFormState>();

    return ( 
        <Box>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"  {...register("text", {required: true})}/>
            {/* <input type="text" /> */}
            {errors.text && <div>Field is empty</div>}
            <div>{JSON.stringify(watch())}</div>
            <button onClick={handleSubmit(onSubmit)}>Add Todo</button>
        </Box>
    );
};

export default TodoForm;