import { AuthProvider } from "./AuthProvider";
import { JobsProvider } from "./Jobs";
import { MenuFooterProvider } from "./MenuFooterProvider";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <JobsProvider>
        <MenuFooterProvider>{children}</MenuFooterProvider>
      </JobsProvider>
    </AuthProvider>
  );
};

export default Providers;
