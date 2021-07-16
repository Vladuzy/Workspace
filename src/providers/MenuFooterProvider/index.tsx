import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MenuFooterProviderData {
  setInHome: Dispatch<SetStateAction<boolean>>;
  inHome: boolean;
  setInWorks: Dispatch<SetStateAction<boolean>>;
  inWorks: boolean;
  setInProfile: Dispatch<SetStateAction<boolean>>;
  inProfile: boolean;
}

interface MenuFooterProviderProps {
  children: ReactNode;
}

const MenuFooterContext = createContext<MenuFooterProviderData>(
  {} as MenuFooterProviderData
);

export const MenuFooterProvider = ({ children }: MenuFooterProviderProps) => {
  const [inHome, setInHome] = useState(
    localStorage.getItem("@WorkSpace:inHome")
      ? JSON.parse(localStorage.getItem("@WorkSpace:inHome") as string)
      : true
  );

  const [inWorks, setInWorks] = useState(
    localStorage.getItem("@WorkSpace:inWorks")
      ? JSON.parse(localStorage.getItem("@WorkSpace:inWorks") as string)
      : false
  );

  const [inProfile, setInProfile] = useState(
    localStorage.getItem("@WorkSpace:inProfile")
      ? JSON.parse(localStorage.getItem("@WorkSpace:inProfile") as string)
      : false
  );

  return (
    <MenuFooterContext.Provider
      value={{
        inHome,
        setInHome,
        inWorks,
        setInWorks,
        inProfile,
        setInProfile,
      }}
    >
      {children}
    </MenuFooterContext.Provider>
  );
};

export const useMenuFooter = () => useContext(MenuFooterContext);
