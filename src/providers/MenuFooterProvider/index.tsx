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
  const [inHome, setInHome] = useState(true);
  const [inWorks, setInWorks] = useState(false);
  const [inProfile, setInProfile] = useState(false);

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
