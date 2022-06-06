import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../image/dashboard/Rectangle_62.png";
import '../style/login.css';
import LoginGoogle from "../components/GoogleOauth";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import LoginPict from "../image/dashboard/pict.png"

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

export default function Login(props){
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch(); 

    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };

    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    const handleLogin = (e) => {
      e.preventDefault();

      setLoading(true);

      form.current.validateAll();

      if (checkBtn.current.context._errors.length === 0) {
        dispatch(login(email, password))
          .then(() => {
            props.history.push("/");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
        });
      } else {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

    return(
        <div id="logincontet" className="d-flex m-0 p-0 align-content-center">
          <div id="container2" className="d-flex flex-column justify-content-center px-5">
            <div className="loginform d-flex flex-column justify-content-center">
              <img src={Logo} alt="" srcSet=""/>
              <h1 className="my-4 fw-bold fs-5">Welcome, Admin BCR</h1>
              <Form onSubmit={handleLogin} ref={form}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <Input 
                    type="text" 
                    className="form-control mb-3"  
                    placeholder="Contoh: johndee@gmail.com"
                    value={email}
                    onChange={onChangeEmail}
                    formNoValidate={[required]}
                  />
                </div>

                <div className="mb-5">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <Input 
                    type="password" 
                    className="form-control mb-3"  
                    placeholder="Contoh: johndee@gmail.com"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required]}
                  />
                </div>

                <LoginGoogle/>
                <button id="login" type="submit" className="btn col-12">Sign In</button>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                <div className="d-flex justify-content-center mt-4">
                  <p className="me-3">Don’t have an account?</p>
                  <Link to="/register" className="text-primary fw-bold">
                    Sign Up for free
                  </Link>
                </div>
              </Form>
          </div>
        </div>
        
        <div id="registerimg" className="p-0">
          <img src={LoginPict} alt="" srcset="" />
        </div>
      </div>
    );
};