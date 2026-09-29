import { createContext, PropsWithChildren, useState } from 'react';

interface IUser {
  readonly login: string | null;
  readonly token: string | null;
  readonly _id: string | null;
}

export interface IUserContext {
  user: IUser;
  setUser: (login: string | null, token: string | null, _id: string | null) => void;
  isAuthorizedUser: boolean;
}

export const UserContext = createContext<IUserContext>({
  user: {
    login: null,
    token: null,
    _id: null,
  },
  setUser: (login: string | null, token: string | null, _id: string | null) => {},
  isAuthorizedUser: false,
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUserState] = useState<IUser>({ login: null, token: null, _id: null });
  const setUser = (login: string | null, token: string | null, _id: string | null) => {
    setUserState({ login, token, _id });
  };
  const isAuthorizedUser = user.login !== null && user.token !== null && user._id !== null;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthorizedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
