export interface IUser {
  name: string;
  email: string;
  token: string;
  photo: string;
}

const key = 'user';
const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

class UserHandler {
  private user: IUser | null;

  constructor() {
    this.user = JSON.parse(localStorage !== null ? localStorage.getItem(key) : null);
  }

  public notifyLogin(newUser: IUser) {
    localStorage !== null ? localStorage.setItem(key, JSON.stringify(newUser)) : null;
    this.user = newUser;
  }

  public isLogged(): boolean {
    return !!this.user;
  }

  public getUser(): IUser | undefined {
    return this.user ? this.user : undefined;
  }

  public getToken(): string {
    if (this.user) {
      return this.user.token;
    }
    return '';
  }

  public logout() {
    localStorage !== null ? localStorage.removeItem(key) : null;
    this.user = null;
  }
}

export default new UserHandler();
