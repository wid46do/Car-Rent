import React, { useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../image/dashboard/Rectangle_62.png";
import '../style/login.css';
import LoginGoogle from "../components/GoogleOauth";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { register } from "../actions/auth";
import RegisterPict from "../image/dashboard/pict.png"

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

export default function Register(){
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return(
      <div id="logincontet" className="d-flex m-0 p-0 align-content-center">
        <div id="container2" className="d-flex flex-column justify-content-center px-3 px-md-5 px-lg-5">
          <div className="loginform d-flex flex-column justify-content-center">
            <img src={Logo} alt="" srcSet=""/>
            <h1 className="my-4 fw-bold fs-5">SignUp</h1>
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <>
                  <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Name</label>
                    <Input 
                      type="name" 
                      className="form-control" 
                      id="exampleInputName1" 
                      placeholder="Full Name"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <Input 
                      type="email" 
                      className="form-control mb-3" 
                      id="exampleInputEmail1" 
                      placeholder="Contoh: johndee@gmail.com"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </div>
                  <div className="mb-5">
                    <label for="exampleInputPassword1" className="form-label">Create Password</label>
                    <Input 
                      type="password" 
                      className="form-control" 
                      id="exampleInputPassword1" 
                      placeholder="6+ karakter"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
                </>
              )}
            
              <LoginGoogle/>
              <button id="login" type="submit" className={successful ? "d-none" : "btn col-12" }>SignUp</button>
              {message && (
                <div className="form-group">
                  {successful ? (
                    <div className="alert alert-success" role="alert">
                      {message}
                      <Link to="/login">
                        {" "}Please Sign In here
                      </Link>
                    </div>
                  ) : (
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  )}
                </div>
              )}

              <CheckButton style={{ display: "none" }} ref={checkBtn} />
              <div className="d-flex justify-content-center mt-4">
                <p className="me-3">Already have an account?</p>
                <Link to="/login" className="text-primary fw-bold">
                  Sign In here
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div id="registerimg" className="p-0">
          <img src={RegisterPict} alt="" srcset="" />
        </div>
      </div>
   );
};