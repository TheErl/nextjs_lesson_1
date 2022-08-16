import React from "react";
import { useForm } from "react-hook-form";
import { TodoFormState } from "types/todo";
import { Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled.button<{primary: boolean}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const AnotherButton = styled(CustomButton)`
    border: 5px solid red;
`;

const TodoForm:React.FC<{onSubmit: (formState:TodoFormState) => void}> = ({onSubmit}) => {

    const {register, handleSubmit, formState: { errors }, watch } = useForm<TodoFormState>();

    return ( 
        <Box p={4} sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
                <Box sx={{
                    width: "52%"
                }}>
                <TextField fullWidth id="outlined-basic" label="Todo name" variant="outlined"  {...register("text", {required: true})}/>
                {errors.text && <div>Field is empty</div>}
                <CustomButton primary={false}>My button</CustomButton>
                <AnotherButton primary={true}>Another button</AnotherButton>
                <Button sx={{marginTop: "10px"}} onClick={handleSubmit(onSubmit)} variant="contained">Add Todo</Button>
            </Box>
        </Box>
    );
};

export default TodoForm;