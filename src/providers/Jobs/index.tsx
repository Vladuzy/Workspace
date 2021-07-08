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

import { useAuth } from "../AuthProvider/index";

interface JobCreationData {
  title: string;
  category: string[];
  description: string;
  location: string;
  valueOffered: number;
  date: string;
}

interface JobsProviderData {
  createJob: (jobCreationData: JobCreationData) => void;
}

interface JobsProviderProps {
  children: ReactNode;
}

const JobsContext = createContext<JobsProviderData>({} as JobsProviderData);

export const JobsProvider = ({ children }: JobsProviderProps) => {
  const { token, userLoggedId } = useAuth();

  const createJob = (jobCreationData: JobCreationData) => {
    const { title, category, description, location, valueOffered, date } =
      jobCreationData;

    const createJobCompleteData = {
      title,
      category,
      description,
      location,
      valueOffered,
      date,
      status: "",
      rating: "",
      appliedCandidateId: "",
      acceptedCandidateId: "",
      rejectedCandidatesIds: [],
      userId: userLoggedId,
    };
    console.log(token);
    api
      .post("/jobs", createJobCompleteData, {
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
    <JobsContext.Provider value={{ createJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
