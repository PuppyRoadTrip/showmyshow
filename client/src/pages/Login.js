import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import NavTabs from '../components/NavTabs/NavTabs';

function Login() {

    const [user, setUser] = useState("");
    const [userData, setUserData] = useState("");

    const handleLogin = () => {
        fetch("api/users", {
            method: "POST",
            body: JSON.stringify({ user, userData }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // .then(data => triggerReUpload(data))
            .catch(err => alert(err));
    };

    return (
        <div>
        <NavTabs />
            <TextField
                style={{ margin: 8 }}
                placeholder="username"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />
            <TextField
                style={{ margin: 8 }}
                placeholder="password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                multiline
            />
            <Button onClick={handleLogin} variant="contained" color="primary">
                Login
            </Button>
        </div>
    )



}

export default Login;