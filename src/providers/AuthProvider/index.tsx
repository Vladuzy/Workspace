import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "react-hot-toast";
import api from "../../service/api";
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

interface UserLoggedInfo {
  name: string;
  type: string;
  img: string;
  email: string;
  password: string;
  rating: string;
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
  id: string;
}

interface UserWantedInfo {
  name: string;
  type: string;
  img: string;
  email: string;
  password: string;
  rating: string;
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
  id: string;
}
interface UserEmployerDataMoreInfo {
  moreInfo: {
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
  moreInfo?: {
    description?: string;
    telephone?: string;
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
  setToken: Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userLoggedId: string;
  setUserLoggedId: Dispatch<SetStateAction<string>>;
  getUserLoggedInfo: (setLoading: Dispatch<SetStateAction<boolean>>) => void;
  userLoggedInfo: UserLoggedInfo;
  getInfoFromASpecificUser: (
    userWantedId: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => void;
  userWantedInfo: UserWantedInfo;
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

  const [userLoggedInfo, setUserLoggedInfo] = useState<UserLoggedInfo>(
    (JSON.parse(localStorage.getItem("@WorkSpace:userLoggedInfo") as string) ||
      {}) as UserLoggedInfo
  );

  const [userWantedInfo, setUserWantedInfo] = useState<UserWantedInfo>(
    (JSON.parse(localStorage.getItem("@WorkSpace:userWantedInfo") as string) ||
      {}) as UserWantedInfo
  );

  const [isAuthenticated, setIsAuthenticated] = useState(
    token !== "" ? true : false
  );

  useEffect(() => {
    handleAuth();
  }, [token]);

  const handleAuth = () => {
    if (token !== "") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const getUserLoggedInfo = (setLoading: Dispatch<SetStateAction<boolean>>) => {
    api
      .get(`/users/${userLoggedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "@WorkSpace:userLoggedInfo",
          JSON.stringify(response.data)
        );
        setUserLoggedInfo(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getInfoFromASpecificUser = (
    userWantedId: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/users/${userWantedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserWantedInfo(response.data);
        localStorage.setItem(
          "@WorkSpace:userWantedInfo",
          JSON.stringify(response.data)
        );
        setLoading(false);
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
        toast.success("Informa????es adicionadas com sucesso!!");
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
        toast.success("Informa????es adicionadas com sucesso!!");
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
        toast.success("Perfil editado com sucesso!!");
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
        toast.success("Perfil editado com sucesso!!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        userLoggedId,
        setUserLoggedId,
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
