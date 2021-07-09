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

interface Job {
  title: string;
  category: string[];
  description: string;
  location: string;
  valueOffered: number;
  date: string;
  status: string;
  rating: string;
  appliedCandidateId: string;
  acceptedCandidateId: string;
  rejectedCandidatesIds: string[];
  userId: string;
}

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
  currentJob: Object;
  userEmployerCreateJob: (jobCreationData: JobCreationData) => void;
  getASpecificJob: (jobId: string) => void;
  userEmployerEditJob: (jobEditData: JobEditData, jobId: string) => void;
  userEmployerAcceptCandidate: (
    appliedCandidateId: string,
    jobId: string
  ) => void;
  userEmployerRejectCandidate: (
    appliedCandidateId: string,
    rejectedCandidatesIds: string[],
    jobId: string
  ) => void;
  userEmployerCompleteJob: (jobId: string) => void;
  userEmployerRatingJob: (ratingJob: string, jobId: string) => void;
  userWorkerApplyToJob: (jobId: string) => void;
}

interface JobsProviderProps {
  children: ReactNode;
}

const JobsContext = createContext<JobsProviderData>({} as JobsProviderData);

export const JobsProvider = ({ children }: JobsProviderProps) => {
  const { token, userLoggedId } = useAuth();

  // const [ currentJobId, setCurrentJobId ] = useState("");

  const [currentJob, setCurrentJob] = useState(
    () => localStorage.getItem("@WorkSpace:currentJob") || []
  );
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

  const getASpecificJob = (jobId: string) => {
    api
      .get(`/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCurrentJob(response.data);
        localStorage.setItem(
          "@WorkSpace:currentJob",
          JSON.stringify(response.data)
        );
        console.log(response);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

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

  const userEmployerAcceptCandidate = (
    appliedCandidateId: string,
    jobId: string
  ) => {
    const acceptCandidateData = {
      status: "inProgress",
      appliedCandidateId: "",
      acceptedCandidateId: appliedCandidateId,
    };

    api
      .patch(`/jobs/${jobId}`, acceptCandidateData, {
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

  const userEmployerRejectCandidate = (
    appliedCandidateId: string,
    rejectedCandidatesIds: string[],
    jobId: string
  ) => {
    const rejectedCandidates = [...rejectedCandidatesIds, appliedCandidateId];

    const rejectCandidateData = {
      status: "isWaiting",
      appliedCandidateId: "",
      rejectedCandidatesIds: [rejectedCandidates],
    };

    api
      .patch(`/jobs/${jobId}`, rejectCandidateData, {
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

  const userEmployerCompleteJob = (jobId: string) => {
    const completeJobData = {
      status: "isCompleted",
    };

    api
      .patch(`/jobs/${jobId}`, completeJobData, {
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

  const userEmployerRatingJob = (ratingJob: string, jobId: string) => {
    const ratingJobData = {
      rating: ratingJob,
    };

    api
      .patch(`/jobs/${jobId}`, ratingJobData, {
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

  const userWorkerApplyToJob = (jobId: string) => {
    const applyToJobData = {
      appliedCandidateId: userLoggedId,
    };

    api
      .patch(`/jobs/${jobId}`, applyToJobData, {
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
    <JobsContext.Provider
      value={{
        currentJob,
        userEmployerCreateJob,
        getASpecificJob,
        userEmployerEditJob,
        userEmployerAcceptCandidate,
        userEmployerRejectCandidate,
        userEmployerCompleteJob,
        userEmployerRatingJob,
        userWorkerApplyToJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
