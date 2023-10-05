import React from 'react'
import { Container, TextField, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";



function Login() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false); // state variable for password visibility


    const onSubmit = (data) => {
        console.log(data);
        // do something with the form data
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev); // toggle the state
    };


    return (
        <Container maxWidth="xs"
            sx={{ p: "32px" }}
        >
            <Typography variant="h4" align="center">
                Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 4,
                            message: "Username must be at least 4 characters long"
                        },
                        maxLength: {
                            value: 20,
                            message: "Username must be at most 20 characters long"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.username}
                            helperText={errors.username ? errors.username.message : ""}
                            {...field}
                        />
                    )}
                />


                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'} // change the type based on the state
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
                            {...field}
                            InputProps={{
                                // add the eye icon as an endAdornment
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleTogglePassword} // toggle the state on click
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    margin="normal"
                    sx={{ mt: 5 }}
                >
                    Register
                </Button>
            </form>
        </Container>
         );

}


export default Login;