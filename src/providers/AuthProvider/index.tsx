import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../../service/api";

import jwt_decode from "jwt-decode";

interface UserDataRegister {
  name: string;
  type: string;
  email: string;
  password: string;
  rating: string;
  moreInfo: {
    categories: [];
    description: string;
    telephone: string;
  };
}

interface UserDataLogin {
  email: string;
  password: string;
}

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

interface AuthProviderData {
  token: string;
  userId: string;
  handleRegister: (userDataRegister: UserDataRegister) => void;
  handleLogin: (userDataLogin: UserDataLogin) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("@WorkSpace:token") || ""
  );

  const [userId, setUserId] = useState(
    () => localStorage.getItem("@WorkSpace:userId") || ""
  );

  const handleRegister = (userDataRegister: UserDataRegister) => {
    api
      .post("/register", userDataRegister)
      .then((response) => {
        console.log(response);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (userDataLogin: UserDataLogin) => {
    api
      .post("/login", userDataLogin)
      .then((response) => {
        console.log(response.data.accessToken);
        localStorage.setItem("@WorkSpace:token", response.data.accessToken);
        setToken(response.data.accessToken);

        const decodedToken: DecodedToken = jwt_decode(
          response.data.accessToken
        );
        console.log(decodedToken);
        setUserId(decodedToken.sub);
        localStorage.setItem("@WorkSpace:token:userId", `${decodedToken.sub}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{ token, userId, handleRegister, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
