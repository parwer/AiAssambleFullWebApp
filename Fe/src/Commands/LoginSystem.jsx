import Cookies from 'js-cookie';

export const LoginSystem = async (username, password) => {
    await fetch("https://localhost:7215/loginsystem", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.status != "Ok") {
                console.log("username or password are wrong");
                return
            }
            Cookies.set("username", data.user.username)
            Cookies.set("isLogin", true)
            console.log("login success")
            window.location = "/";
        })
}

export const logoutSystem = async () => {
    await Cookies.remove("username");
    await Cookies.remove("isLogin");
    window.location.reload();
}

export const isLogedIn = () => {
    var token = Cookies.get("isLogin");
    var username = Cookies.get("username");
    return { token: !!token, username: username };
}

export const logedIn = async () => {
    var db = isLogedIn();
    if (db.token) {
        window.location = "/"
    }
}