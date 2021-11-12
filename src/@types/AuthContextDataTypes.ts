import { UserTypes } from "./UserTypes";

export interface AuthContextDataTypes {
  user: UserTypes | null;
  signOut: () => void;
  setUser: (user: UserTypes) => void;
}
