export interface IUser {
  name: string;
  email: string;
  token: string;
}

const key = "user";

class UserHandler {
  private user: IUser | null;

  constructor() {
    this.user = JSON.parse(localStorage.getItem(key) || "null");
  }

  public notifyLogin(newUser: IUser) {
    localStorage.setItem(key, JSON.stringify(newUser));
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
    return "";
  }

  public logout() {
    localStorage.removeItem(key);
    this.user = null;
  }
}

export default new UserHandler();
