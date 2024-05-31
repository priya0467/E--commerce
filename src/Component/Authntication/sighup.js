import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { UseuserAuth } from "../../Context/UserAuth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signUp } = UseuserAuth();
    const navigate=useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            alert("New user is created");
            navigate("/")

            // Clear input fields
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-4 box text-center shadow rounded">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form className="p-3" onSubmit={submitHandler}>
                    <h2 className="mb-3">Sign Up</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2 text-center shadow rounded">
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </div>
                    <div className="p-4 mt-3 text-center shadow rounded">
                        Already have an Account? <Link to="/">Log In</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Signup;
