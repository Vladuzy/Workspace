import { AuthProvider } from "./AuthProvider";
import { JobsProvider } from "./Jobs";
import { MenuFooterProvider } from "./MenuFooterProvider";
import { ViewportProvider } from "./GetViewport";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ViewportProvider>
      <AuthProvider>
        <JobsProvider>
          <MenuFooterProvider>{children}</MenuFooterProvider>
        </JobsProvider>
      </AuthProvider>
    </ViewportProvider>
  );
};

export default Providers;
