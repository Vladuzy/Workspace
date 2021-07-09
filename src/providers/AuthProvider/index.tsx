// Os imports de Dispatch e SeStateAction, podem deixar, pois talvez iremos
// precisar mais para frente quando for setar os states.
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

interface UserEmployerDataMoreInfo {
  moreInfo: {
    categories: [];
    description: string;
    telephone: string;
  };
}

interface UserWorkerDataMoreInfo {
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
}

interface UserEmployerDataEdit {
  email: string;
  name: string;
  moreInfo: {
    categories: [];
    description: string;
    telephone: string;
  };
}

interface UserWorkerDataEdit {
  email: string;
  name: string;
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
}

interface AuthProviderData {
  token: string;
  isAuthenticated: boolean;
  userLoggedId: string;
  handleRegister: (userDataRegister: UserDataRegister) => void;
  handleLogin: (userDataLogin: UserDataLogin) => void;
  getUserLoggedInfo: () => void;
  userLoggedInfo: Object;
  getInfoFromASpecificUser: (userWantedId: string) => void;
  userWantedInfo: Object;
  addMoreInfoUserEmployer: (userDataMoreInfo: UserEmployerDataMoreInfo) => void;
  addMoreInfoUserWorker: (
    userWorkerDataMoreInfo: UserWorkerDataMoreInfo
  ) => void;
  editUserEmployer: (userEmployerDataEdit: UserEmployerDataEdit) => void;
  editUserWorker: (userWorkerDataEdit: UserWorkerDataEdit) => void;
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

  const [isAuthenticated, setIsAuthenticated] = useState(
    token !== "" ? true : false
  );

  useEffect(() => {
    getUserLoggedInfo();
    handleAuth();
  }, []);

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

        setUserLoggedId(decodedToken.sub);
        localStorage.setItem("@WorkSpace:userLoggedId", `${decodedToken.sub}`);
      })
      .catch((err) => console.log(err));
  };

  const handleAuth = () => {
    if (token !== "") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
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

  const addMoreInfoUserEmployer = (
    userEmployerDataMoreInfo: UserEmployerDataMoreInfo
  ) => {
    api
      .patch(`/users/${userLoggedId}`, userEmployerDataMoreInfo, {
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

  const addMoreInfoUserWorker = (
    userWorkerDataMoreInfo: UserWorkerDataMoreInfo
  ) => {
    api
      .patch(`/users/${userLoggedId}`, userWorkerDataMoreInfo, {
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

  const editUserEmployer = (userEmployerDataEdit: UserEmployerDataEdit) => {
    api
      .patch(`/users/${userLoggedId}`, userEmployerDataEdit, {
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

  const editUserWorker = (userWorkerDataEdit: UserWorkerDataEdit) => {
    api
      .patch(`/users/${userLoggedId}`, userWorkerDataEdit, {
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
        isAuthenticated,
        userLoggedId,
        handleRegister,
        handleLogin,
        getUserLoggedInfo,
        userLoggedInfo,
        getInfoFromASpecificUser,
        userWantedInfo,
        addMoreInfoUserEmployer,
        addMoreInfoUserWorker,
        editUserEmployer,
        editUserWorker,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
