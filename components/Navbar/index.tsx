import { useEffect, useState } from "react";
import userHandler from "../../utils/userHandler";
import Link from "next/link";
import userService from "../../services/userService";

// material
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";

const NavbarComponent = ({ isLogged, userData }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    userService.userLogout();
    if (userData === null) {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (isLogged) {
      const userData = userHandler.getUser();
      setUser(userData);
    } else {
      setUser(null);
    }
  }, [isLogged]);

  return (
    <Navbar className={"h-1/5"} color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <Link href="/">Twitdev</Link>
          {user !== null && (
            <NavbarToggler
              color="white"
              onClick={() => setOpenNavbar(!openNavbar)}
              ripple="light"
            />
          )}
        </NavbarWrapper>
        {user !== null && (
          <NavbarCollapse open={openNavbar}>
            <Nav>
              <NavLink ripple="light">
                {`Hola ${user?.name}`}
                <Image
                  className={"w-8"}
                  src={user?.photo || ""}
                  rounded={true}
                />
              </NavLink>
              <div>
                <Button onClick={logout}>{user !== null ? "Salir" : ""}</Button>
              </div>
            </Nav>
          </NavbarCollapse>
        )}
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
