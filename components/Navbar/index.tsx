import Link from 'next/link';
import { useEffect, useState } from 'react';
import userService from 'services/userService';
import userHandler from 'utils/userHandler';

// material
import { Navbar, Typography } from '@material-tailwind/react';
import { ProfileMenu } from './profile';

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

  const firstName = user?.name.split(' ')[0];

  return (
    <Navbar className={'p-4 max-w-full rounded-none'} color="light-blue" placeholder="Navbar">
      <div className="flex justify-between items-center">
        <Link href="/">Twitdev</Link>
        <div className="flex items-center gap-2">
          {user !== null && (
            <Typography color="white" placeholder="user" className="text-md">
              Hi {firstName}
            </Typography>
          )}
          {user !== null && (
            <ProfileMenu
              isMenuOpen={openNavbar}
              setIsMenuOpen={setOpenNavbar}
              user={user}
              logout={logout}
            />
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
