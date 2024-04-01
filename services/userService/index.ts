import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/client';
import { setUser } from '../../auth/authSlice';
import { store } from '../../store';
import userHandler from '../../utils/userHandler';

class UserService {
  async userLogin() {
    try {
      const githubProvider = new GithubAuthProvider();
      const response = await signInWithPopup(auth, githubProvider);
      if (!response) throw new Error('Error login github');

      if (response) {
        console.log('Github user: ', response.user);
        const userResponse = response.user;
        const { displayName, email, refreshToken, photoURL } = userResponse;

        const user = {
          name: displayName,
          email: email,
          token: refreshToken,
          photo: photoURL,
        };
        store.dispatch(setUser(user));
      }
    } catch (error) {
      throw error;
    }
  }

  userLogout() {
    try {
      store.dispatch(setUser(null));
      userHandler.logout();
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
