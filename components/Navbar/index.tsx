import { useEffect, useState } from "react";
import userHandler from "utils/userHandler";
import Link from "next/link";
import userService from "services/userService";

// material
import { Navbar, Typography } from "@material-tailwind/react";
import { ProfileMenu } from "./profile";


const NavbarComponent = ({ isLogged }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    userService.userLogout();
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
    <Navbar className={"p-4 max-w-full rounded-none"} color="light-blue" placeholder="Navbar">
      <div className="flex justify-between items-center">
        <Link href="/">Twitdev</Link>
        <div className="flex items-center gap-4">
          {user !== null && (
            <Typography color="white" placeholder='user' className="text-md">
            Hola {user?.name}
            </Typography>
          )}
        {user !== null && (
          <ProfileMenu isMenuOpen={openNavbar} setIsMenuOpen={setOpenNavbar} user={user} logout={logout} />
        )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
