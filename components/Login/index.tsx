import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import userService from "services/userService";
import styles from "./Login.module.css";

const Login = () => {
  const login = () => {
    userService.userLogin();
  };

  return (
    <div className={styles.container}>
      <div className="p-4 mb-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-sky-600">Twitdev</h1>
        <h4 className="font-bold w-2/3 text-center">
          {"¡Ingresa a la comunidad dev y twitea con developers!"}
        </h4>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-black rounded-full flex items-center gap-4"
          color="blue-gray"
          ripple
          placeholder={"login"}
          onClick={() => login()}
        >
          Ingresar con GitHub <FaGithub className="text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default Login;
