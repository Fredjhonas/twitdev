import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/client";

class UserService {
  async userLogin() {
    try {
      const githubProvider = new GithubAuthProvider();
      const response = await signInWithPopup(auth, githubProvider);
      if (!response) throw new Error("Error al actualizar password");

      if (response) {
        console.log("Github user: ", response.user);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
