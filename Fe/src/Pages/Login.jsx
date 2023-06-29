import { useState } from "react"
import { LoginSystem, isLogedIn, logedIn } from "../Commands/LoginSystem";
import { Box, Button, Container, FormControl, Link, TextField, Typography } from "@mui/material";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [LoginRes, setLoginRes] = useState(true);

    logedIn();

    const handleSubmited = async (e) => {
        e.preventDefault();
        await LoginSystem(username, password);

        setTimeout(() => {
            var token = isLogedIn().token;
            if (token != true) {
                setLoginRes(false);
            }
        }, 1000);
    }

    return (
        <Container>
            {LoginRes ? (
                <div></div>
            ) : (
                <Typography>Username or Password are wrong</Typography>
            )}
            <Box
                sx={{
                    marginTop: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h4"
                >
                    Login
                </Typography>
                <form onSubmit={handleSubmited}>
                    <Box
                        id="Username"
                    >
                        <FormControl>
                            <TextField
                                label="Username"
                                variant="standard"
                                value={username}
                                onChange={e => setUsername(e.target.value)}

                            />
                        </FormControl>
                    </Box>
                    <Box
                        id="Username"
                    >
                        <FormControl>
                            <TextField
                                label="Password"
                                variant="standard"
                                type="password"
                                margin="normal"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                        </FormControl>
                    </Box>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="caption">
                            Not have user yet? 
                        </Typography>
                        <Link href="register">Register</Link>
                    </Box>
                    <Button 
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    )
}