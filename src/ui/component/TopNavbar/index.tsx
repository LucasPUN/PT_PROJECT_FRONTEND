import {Button, Container, Navbar, Spinner} from "react-bootstrap";
import {Link} from "@tanstack/react-router";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/loginUserContext.ts";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

export default function TopNavbar() {
  const loginUser = useContext(LoginUserContext);

  const handleLogout = async () => {
    await FirebaseAuthService.signOut();
  }

  const renderLoginContainer = () => {
    if (loginUser) {
      return (
        <>
          <div className="text-white">{loginUser.email}</div>
          <Button>
            <FontAwesomeIcon icon={faCartShopping} spin style={{color: "#ffffff",}} />
          </Button>
          <Button onClick={handleLogout}>
            Logout
          </Button>
        </>
      )
    } else if (loginUser === undefined) {
      return (
        <Spinner/>
      )
    } else {
      return (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )
    }
  }

  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none"
            }}
          >
            AV Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          {renderLoginContainer()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}