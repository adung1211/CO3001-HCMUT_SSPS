import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <img className="logobk" alt="Logobk" src="https://i.imgur.com/4CVmNSg.png" />
                    <div className="text-wrapper">Đăng nhập</div>
                    <img className="line" alt="Line" src="https://i.imgur.com/QVHXxp4.png" />
                    <img className="img" alt="Rectangle" src="https://i.imgur.com/Kew377l.png" />
                    <img className="rectangle-2" alt="Rectangle" src="https://i.imgur.com/Kew377l.png" />
                    <Link to="StudentHomePage" className="div">Đăng nhập dành cho sinh viên</Link>
                    <p className="p">Đăng nhập dành cho cán bộ</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
