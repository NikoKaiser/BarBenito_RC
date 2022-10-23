import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/images/BB.svg";
import "./NavBar.css";

function NavBar() {
  const listaCategorias = [
    {
      id: "1",
      name: "BEBIDAS",
      nameButton: "BEBIDAS",
    },
    {
      id: "2",
      name: "COMIDAS",
      nameButton: "COMIDAS",
    },
    {
      id: "3",
      name: "POSTRES",
      nameButton: "POSTRES",
    }
  ];

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <img alt="" src={logo} className="d-inline-block align-text-top navbarLogo" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="collapse navbar-collapse justify-content-center navListMenu show">
              <Nav>
                {listaCategorias.map((value) => (
                  <Link key={value.id} to={`/category/${value.name}`} className="nav-link font">
                    {value.nameButton}
                  </Link>
                ))}
              </Nav>
            </div>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
