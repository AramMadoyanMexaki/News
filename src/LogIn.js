import "./LogIn.css";

function LogIn() {
    return (
        <div className="login">
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button className="logon-btn">LogIn</button>
        </div>
    );
}

export default LogIn;