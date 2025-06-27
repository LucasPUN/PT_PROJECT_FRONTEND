import {Alert, Button, Container, Form} from "react-bootstrap";
import TopNavbar from "../../component/TopNavbar";
import {GoogleLoginButton} from "react-social-login-buttons";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts";
import {FormEvent, useState} from "react";
import {useRouter} from "@tanstack/react-router";

export default function LoginPage() {
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const router = useRouter();

  const handleSigninWithEmailAndPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!

    const loginResult = await FirebaseAuthService.signInWithEmailAndPassword(email, password);

    if (loginResult) {
      router.history.back();
    } else {
      setIsLoginFailed(true);
    }
  }

  return (
    <>
      <TopNavbar/>
      <Container>
        <div className="d-flex justify-content-center">
          <div
            className="border rounded p-3"
            style={{
              width: "720px"
            }}
          >
            <Form onSubmit={handleSigninWithEmailAndPassword}>
              {
                isLoginFailed &&
                <Alert variant="danger">
                  Login Failed!!!
                </Alert>
              }

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"/>
              </Form.Group>
              <Button variant="primary" type="submit" style={{width: "100%"}}>
                Login
              </Button>
              <hr/>
              <GoogleLoginButton onClick={() => alert("Hello")}/>
            </Form>
          </div>
        </div>
      </Container>


    </>
  );
}
