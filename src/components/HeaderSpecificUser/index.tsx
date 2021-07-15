import Rating from "@material-ui/lab/Rating";
import imgAvatar from "../../assets/img/Avatar.svg";
import { useHistory } from "react-router-dom";
import close from "../../assets/img/close.svg";
import {
  Container,
  HandleContainer,
  HeaderInternContainer,
  ImageHeader,
  HeaderContainer,
  TitleContainer,
} from "./style";
import { useEffect, useState } from "react";

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

interface HeaderSpecificUserProps {
  name: string;
  type: string;
  rating: string;
  id: string;
  listCompletedJobsSpecificUser: Job[];
}

const HeaderSpecificUser = ({
  name,
  type,
  rating,
  id,
  listCompletedJobsSpecificUser,
}: HeaderSpecificUserProps) => {
  const history = useHistory();

  const handleExitApplication = () => {
    history.goBack();
  };

  const totalRating =
    listCompletedJobsSpecificUser.length === 0
      ? "Sem Avaliações"
      : listCompletedJobsSpecificUser.reduce(
          (acc, acumulater) => parseInt(acumulater.rating) + acc,
          0
        ) / listCompletedJobsSpecificUser.length;

  useEffect(() => {}, []);

  return (
    <Container>
      <HeaderContainer>
        <img src={imgAvatar} alt="Icone Avatar" />
        <HeaderInternContainer>
          <TitleContainer>{name}</TitleContainer>
          {type === "worker" &&
            (totalRating === "Sem Avaliações" ? (
              <p>{totalRating}</p>
            ) : (
              <Rating
                precision={0.5}
                name="read-only"
                value={totalRating}
                readOnly
              />
            ))}
        </HeaderInternContainer>
      </HeaderContainer>
      <HandleContainer>
        <ImageHeader
          onClick={handleExitApplication}
          src={close}
          alt="Icone de fechar"
        />
      </HandleContainer>
    </Container>
  );
};

export default HeaderSpecificUser;
