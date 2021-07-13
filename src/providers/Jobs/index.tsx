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
  category: string;
  description: string;
  location: string;
  status: string;
  rating: string;
  valueOffered: number;
  date: string;
  appliedCandidateId: string;
  acceptedCandidateId: string;
  rejectedCandidatesIds: string[];
  userId: string;
  id: string;
}

interface CurrentJob {
  title: string;
  category: string;
  description: string;
  location: string;
  status: string;
  rating: string;
  valueOffered: number;
  date: string;
  appliedCandidateId: string;
  acceptedCandidateId: string;
  rejectedCandidatesIds: string[];
  userId: string;
  id: string;
}

export interface JobCreationData {
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
  getASpecificJob: (jobId: string) => void;
  currentJob: CurrentJob;
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
  getListAllJobs: () => void;
  listAllJobs: Job[];
  getListWaitingJobsWithoutCandidates: () => void;
  listWaitingJobsWithoutCandidates: Job[];
  getListUserEmployerJobs: () => void;
  getListUserWorkerJobs: () => void;
  listUserJobs: Job[];
  getListUserEmployerCompletedJobs: () => void;
  getListUserWorkerCompletedJobs: () => void;
  listCompletedJobs: Job[];
  getListUserEmployerCurrentJobs: () => void;
  listUserEmployerCurrentJobs: Job[];
  getListUserEmployerActiveJobs: () => void;
  listUserEmployerActiveJobs: Job[];
  getListUserWorkerAppliedJobs: () => void;
  listUserWorkerAppliedJobs: Job[];
  getListUserWorkerActiveJobs: () => void;
  listUserWorkerActiveJobs: Job[];
}

interface JobsProviderProps {
  children: ReactNode;
}

const JobsContext = createContext<JobsProviderData>({} as JobsProviderData);

export const JobsProvider = ({ children }: JobsProviderProps) => {
  const { token, userLoggedId } = useAuth();

  // const [ currentJobId, setCurrentJobId ] = useState("");

  const [currentJob, setCurrentJob] = useState<CurrentJob>(
    (JSON.parse(localStorage.getItem("@WorkSpace:currentJob") as string) ||
      {}) as CurrentJob
  );

  const [listAllJobs, setListAllJobs] = useState<Job[]>(
    (JSON.parse(localStorage.getItem("@WorkSpace:listAllJobs") as string) ||
      []) as Job[]
  );

  const [
    listWaitingJobsWithoutCandidates,
    setListWaitingJobsWithoutCandidates,
  ] = useState<Job[]>(
    (JSON.parse(
      localStorage.getItem(
        "@WorkSpace:listWaitingJobsWithoutCandidates"
      ) as string
    ) || []) as Job[]
  );

  const [listUserJobs, setListUserJobs] = useState<Job[]>(
    (JSON.parse(localStorage.getItem("@WorkSpace:listUserJobs") as string) ||
      []) as Job[]
  );

  const [listCompletedJobs, setListCompletedJobs] = useState<Job[]>(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:listUserCompletedJobs") as string
    ) || []) as Job[]
  );
  const [listUserEmployerCurrentJobs, setListUserEmployerCurrentJobs] =
    useState<Job[]>(
      (JSON.parse(
        localStorage.getItem("@WorkSpace:listUserEmployerCurrentJobs") as string
      ) || []) as Job[]
    );

  const [listUserEmployerActiveJobs, setListUserEmployerActiveJobs] = useState<
    Job[]
  >(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:listUserEmployerActiveJobs") as string
    ) || []) as Job[]
  );

  const [listUserWorkerAppliedJobs, setListUserWorkerAppliedJobs] = useState<
    Job[]
  >(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:listUserWorkerAppliedJobs") as string
    ) || []) as Job[]
  );

  const [listUserWorkerActiveJobs, setListUserWorkerActiveJobs] = useState<
    Job[]
  >(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:listUserWorkerActiveJobs") as string
    ) || []) as Job[]
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
      status: "isWaiting",
      rating: "",
      appliedCandidateId: "Sem Candidatos",
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
      appliedCandidateId: "Sem Candidatos",
      acceptedCandidateId: "",
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

  const getListAllJobs = () => {
    api
      .get("/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListAllJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listAllJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListWaitingJobsWithoutCandidates = () => {
    api
      .get("/jobs?status=isWaiting&appliedCandidateId=Sem%20Candidatos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListWaitingJobsWithoutCandidates(response.data);
        localStorage.setItem(
          "@WorkSpace:listWaitingJobsWithoutCandidates",
          JSON.stringify(response.data)
        );
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getListUserEmployerJobs = () => {
    api
      .get(`jobs?userId=${userLoggedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListUserJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserJobs",
          JSON.stringify(response.data)
        );
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getListUserWorkerJobs = () => {
    api
      .get(`jobs?acceptedCandidateId=${userLoggedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListUserJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserJobs",
          JSON.stringify(response.data)
        );
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getListUserEmployerCompletedJobs = () => {
    api
      .get(`jobs?userId=${userLoggedId}&status=isCompleted`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListCompletedJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserCompletedJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListUserWorkerCompletedJobs = () => {
    api
      .get(`jobs?acceptedCandidateId=${userLoggedId}&status=isCompleted`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListCompletedJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserCompletedJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListUserEmployerCurrentJobs = () => {
    api
      .get(`jobs?userId=${userLoggedId}&status=isWaiting`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListUserEmployerCurrentJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserEmployerCurrentJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListUserEmployerActiveJobs = () => {
    api
      .get(`jobs?userId=${userLoggedId}&status=inProgress`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListUserEmployerActiveJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserEmployerActiveJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListUserWorkerAppliedJobs = () => {
    api
      .get(`jobs?appliedCandidateId=${userLoggedId}&status=isWaiting`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListUserWorkerAppliedJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserWorkerAppliedJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const getListUserWorkerActiveJobs = () => {
    api
      .get(`jobs?acceptedCandidateId=${userLoggedId}&status=inProgress`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setListUserWorkerActiveJobs(response.data);
        localStorage.setItem(
          "@WorkSpace:listUserWorkerActiveJobs",
          JSON.stringify(response.data)
        );
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  return (
    <JobsContext.Provider
      value={{
        userEmployerCreateJob,
        getASpecificJob,
        currentJob,
        userEmployerEditJob,
        userEmployerAcceptCandidate,
        userEmployerRejectCandidate,
        userEmployerCompleteJob,
        userEmployerRatingJob,
        userWorkerApplyToJob,
        getListAllJobs,
        listAllJobs,
        getListWaitingJobsWithoutCandidates,
        listWaitingJobsWithoutCandidates,
        getListUserEmployerJobs,
        getListUserWorkerJobs,
        listUserJobs,
        getListUserEmployerCompletedJobs,
        getListUserWorkerCompletedJobs,
        listCompletedJobs,
        getListUserEmployerCurrentJobs,
        listUserEmployerCurrentJobs,
        getListUserEmployerActiveJobs,
        listUserEmployerActiveJobs,
        getListUserWorkerAppliedJobs,
        listUserWorkerAppliedJobs,
        getListUserWorkerActiveJobs,
        listUserWorkerActiveJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
