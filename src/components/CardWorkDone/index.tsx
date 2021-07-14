import { useEffect } from "react"
import { useJobs } from "../../providers/Jobs"
import { useAuth } from "../../providers/AuthProvider"

const CardWorkDone = () => {
    
    const {getASpecificJob, currentJob, listCompletedJobs, getListUserEmployerCompletedJobs, getListUserWorkerCompletedJobs} = useJobs()
    const {userLoggedInfo} = useAuth()

    useEffect(() => {
        if (userLoggedInfo.type === "employer") {
          getListUserEmployerCompletedJobs();
        } else {
          getListUserWorkerCompletedJobs();
        }
      }, []);
    console.log(listCompletedJobs)
    return(
        <div>

        </div>
    )
}
export default CardWorkDone
