import Button from "@material-tailwind/react/Button";
import { FaGithub } from "react-icons/fa";
import userService from "../../services/userService";
import styles from "./Login.module.css";

const Login = () => {
  const login = () => {
    userService.userLogin();
  };

  return (
    <div className={styles.container}>
      <div className="p-10 mb-20">
        <h1 className="text-4xl font-bold mb-4 text-sky-600">Twitdev</h1>
        <h4 className="font-bold text-justify whitespace-pre-line">
          {"¡Ingresa a la comunidad dev \ny twitea con developers!"}
        </h4>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-black"
          color="blueGray"
          rounded={true}
          ripple="dark"
          onClick={() => login()}
        >
          Ingresar con GitHub &nbsp; <FaGithub className="text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default Login;
