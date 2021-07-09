import { AuthProvider } from "./AuthProvider";
import { JobsProvider } from "./Jobs";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <JobsProvider>{children}</JobsProvider>
    </AuthProvider>
  );
};

export default Providers;
