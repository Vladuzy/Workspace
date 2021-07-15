import {ReactNode, useEffect} from "react"
import { FaUserCircle } from 'react-icons/fa'
import {useAuth} from "../../providers/AuthProvider"
import {useJobs} from "../../providers/Jobs";
import imgMoreInfo from "../../assets/img/more_Info.svg";
import Rating from "@material-ui/lab/Rating";
import {Container, InfoContainer, InfoContainerTitle, InfoContainerSubTitle} from "./style"
import {useHistory} from "react-router-dom"

interface CartCompletedJobPros{
    children:ReactNode,
}

interface Job {
    title: string;
  rating: string;
  userId: string;
  id: string;
}


const CartCompletedJob = ({title, userId, rating, id}:Job ) =>{
    const { getListUserEmployerCompletedJobs, getListUserWorkerCompletedJobs} = useJobs()
        const {userLoggedInfo} = useAuth()
        const history = useHistory()
        const handleClick = () => {
          history.push(`/works/${id}`)
        }

        useEffect(() => {
            if (userLoggedInfo.type === "employer") {
              getListUserEmployerCompletedJobs();
            } else if (userLoggedInfo.type === "worker") {
              getListUserWorkerCompletedJobs();
            }
          }, []);
    return (
        <Container>
            <FaUserCircle className="Avatar-Container"/>
            <InfoContainer>
              <InfoContainerTitle>{title}</InfoContainerTitle>
              <InfoContainerSubTitle>rodrigo</InfoContainerSubTitle>
                <Rating
                precision={0.5}
                name="read-only"
                value={Number(rating)}
                readOnly
                />
            </InfoContainer>
            <img onClick={handleClick} src={imgMoreInfo} alt="Icone more_info" />
            
        </Container>
    )
}

export default CartCompletedJob;