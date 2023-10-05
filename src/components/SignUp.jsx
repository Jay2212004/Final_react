import React from 'react'
import SignUp from './SignUp.css'
import { Container, TextField, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import  { useState } from "react";


function RegistrationForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false); // state variable for password visibility

    const onSubmit = (data) => {
        console.log(data);
        // do something with the form data
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev); // toggle the state
    };

    return (
        <Container maxWidth="xs"className='jay'
            sx={{ p: "32px" }}
        >
            <Typography variant="h4" align="center">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                            {...field}
                        />
                    )}
                />


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
                    name="email"
                    control={control}
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}
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
                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        required: "Confirm password is required",
                        validate: (value) =>
                            value === control.getValues("password") ||
                            "Passwords do not match"
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.confirmPassword}
                            helperText={
                                errors.confirmPassword ? errors.confirmPassword.message : ""
                            }
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
                    sx={{ mt:4 }}
                >
                    Register
                </Button>
            </form>
        </Container>
    );
}

export default RegistrationForm;