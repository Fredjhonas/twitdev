import { Button } from '@material-tailwind/react';
import { FaGithub } from 'react-icons/fa';
import userService from 'services/userService';
import styles from './Login.module.css';
import PrivateRoute from 'components/PrivateRoute';

const Login = () => {
  const login = () => {
    userService.userLogin();
  };

  return (
    <PrivateRoute>
      <div className={styles.container}>
        <div className="p-4 mb-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-sky-600">Twitdev</h1>
          <h4 className="font-bold w-1/2 text-center">
            Welcome to Twitdev, a place for developers to share and grow their knowledge.
          </h4>
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-black rounded-full flex items-center gap-4"
            color="blue-gray"
            ripple
            placeholder={'login'}
            onClick={() => login()}
          >
            Login with <FaGithub className="text-lg" />
          </Button>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Login;
