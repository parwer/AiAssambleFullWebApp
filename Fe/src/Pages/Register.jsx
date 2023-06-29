import { useState } from "react"

const createUser = (username, password) => {
    fetch("https://localhost:7215/user/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onTableSubmit = (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            console.log("Kuy")
            return
        }
        createUser(username, password);
    }

    return (
        <div>
            <form onSubmit={onTableSubmit}>
                <label>Username: </label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <label>Password: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <label>Confirm password: </label>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}