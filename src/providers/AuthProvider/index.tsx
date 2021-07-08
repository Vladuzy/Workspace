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

interface UserDataMoreInfo {
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
}

interface AuthProviderData {
  token: string;
  userLoggedId: string;
  handleRegister: (userDataRegister: UserDataRegister) => void;
  handleLogin: (userDataLogin: UserDataLogin) => void;
  getUserLoggedInfo: () => void;
  userLoggedInfo: {};
  getInfoFromASpecificUser: (userWantedId: string) => void;
  userWantedInfo: {};
  addMoreInfoUser: (userDataMoreInfo: UserDataMoreInfo) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("@WorkSpace:token") || ""
  );

  const [userLoggedId, setUserLoggedId] = useState(
    () => localStorage.getItem("@WorkSpace:userLoggedId") || ""
  );

  const [userLoggedInfo, setUserLoggedInfo] = useState(
    () => localStorage.getItem("@WorkSpace:userLoggedInfo") || {}
  );

  const [userWantedInfo, setUserWantedInfo] = useState({});

  // useEffect(() => {
  //   getUserInfo();
  //   handleAuth();
  // }, [token]);

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
        setUserLoggedId(decodedToken.sub);
        localStorage.setItem(
          "@WorkSpace:token:userLoggedId",
          `${decodedToken.sub}`
        );
      })
      .catch((err) => console.log(err));
  };

  const getUserLoggedInfo = () => {
    api
      .get(`/users/${userLoggedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "@WorkSpace:userLoggedInfo",
          JSON.stringify(response.data)
        );
        setUserLoggedInfo(response.data);
        console.log(userLoggedInfo);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getInfoFromASpecificUser = (userWantedId: string) => {
    api
      .get(`/users/${userWantedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserWantedInfo(response.data);
        console.log(userWantedInfo);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const addMoreInfoUser = (userDataMoreInfo: UserDataMoreInfo) => {
    api
      .patch(`/users/${userLoggedId}`, userDataMoreInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userLoggedId,
        handleRegister,
        handleLogin,
        getUserLoggedInfo,
        userLoggedInfo,
        getInfoFromASpecificUser,
        userWantedInfo,
        addMoreInfoUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
