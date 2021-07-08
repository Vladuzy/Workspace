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

interface JobEditData {
  title: string;
  description: string;
  valueOffered: number;
  date: string;
}

interface JobsProviderData {
  userEmployerCreateJob: (jobCreationData: JobCreationData) => void;
  userEmployerEditJob: (jobEditData: JobEditData, jobId: string) => void;
}

interface JobsProviderProps {
  children: ReactNode;
}

const JobsContext = createContext<JobsProviderData>({} as JobsProviderData);

export const JobsProvider = ({ children }: JobsProviderProps) => {
  const { token, userLoggedId } = useAuth();

  // const { currentJobId, setCurrentJobId } = useState("");

  // const { currentJob, setCurrentJob } = useState({});

  const userEmployerCreateJob = (jobCreationData: JobCreationData) => {
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

  // const getASpecificJob = (jobId) => {};

  const userEmployerEditJob = (jobEditData: JobEditData, jobId: string) => {
    api
      .patch(`/jobs/${jobId}`, jobEditData, {
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

  // const userEmployerAcceptCandidate = (
  //   appliedCandidateId: string,
  //   jobId: string
  // ) => {
  //   const acceptCandidateData = {
  //     status: "isProgress",
  //     appliedCandidateId: "",
  //     acceptedCandidateId: appliedCandidateId,
  //   };

  //   api
  //     .patch(`/jobs/${jobId}`, acceptCandidateData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       //Show Toast
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <JobsContext.Provider
      value={{ userEmployerCreateJob, userEmployerEditJob }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
