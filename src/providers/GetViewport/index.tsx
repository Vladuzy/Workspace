import { ReactNode, SetStateAction } from "react";
import { Dispatch } from "react";
import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

interface ViewportProviderProps {
  children: ReactNode;
}

interface Viewport {
  width: number;
  height: number;
}

interface ViewportProviderData {
  viewport: {
    width: number;
    height: number;
  };
  setViewport: Dispatch<SetStateAction<Viewport>>;
  getWindowDimension: () => Viewport
}

const ViewportContext = createContext<ViewportProviderData>(
  {} as ViewportProviderData
);

export const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const [viewport, setViewport] = useState<Viewport>(() => {
    return (
      JSON.parse(localStorage.getItem("@WorkSpace:viewport") as string) || {} as Viewport
    );
  });

  const getWindowDimension = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return { width, height };
  };

  const handleViewPort = () => {
    window.addEventListener("resize", () => {
      setViewport(getWindowDimension());
      localStorage.setItem(
        "@WorkSpace:viewport",
        JSON.stringify(getWindowDimension())
      );
    });
  }

  useEffect(() => {
    handleViewPort()
  }, []);

  return (
    <ViewportContext.Provider value={{ viewport, getWindowDimension, setViewport }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => useContext(ViewportContext);
