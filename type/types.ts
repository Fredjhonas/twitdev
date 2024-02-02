import { IUser } from 'utils/userHandler';

export interface IAuthState {
  user: IUser | null;
}
