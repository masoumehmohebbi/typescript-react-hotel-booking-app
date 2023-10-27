// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createContext, useContext, useReducer } from 'react';
import { User, AuthState, AuthAction, AuthContextProps } from '../types/types';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logIn':
      return { user: action.payload, isAuthenticated: true };
    case 'logOut':
      return { user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action!');
  }
};

const FAKE_USER: User = {
  name: 'user',
  email: 'user@gmail.com',
  password: 'user',
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(authReducer, initialState);

  function logIn(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'logIn', payload: FAKE_USER });
  }

  function logOut() {
    dispatch({ type: 'logOut' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
