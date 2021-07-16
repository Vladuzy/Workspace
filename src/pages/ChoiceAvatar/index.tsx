import imgMan1 from "../../assets/imgAvatar/man1.svg";
import imgMan2 from "../../assets/imgAvatar/man2.svg";
import imgMan3 from "../../assets/imgAvatar/man3.svg";
import imgMan4 from "../../assets/imgAvatar/man4.svg";
import imgWoman1 from "../../assets/imgAvatar/woman1.svg";
import imgWoman2 from "../../assets/imgAvatar/woman2.svg";
import imgWoman3 from "../../assets/imgAvatar/woman3.svg";
import imgWoman4 from "../../assets/imgAvatar/woman4.svg";
import { Container, Button, ImgContainer } from "./style";
import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import toast from "react-hot-toast";

const ChoiceAvatar = () => {
  const { userLoggedInfo, userLoggedId, token } = useAuth();
  const history = useHistory();
  const [isActive, setIsActivie] = useState("");
  const selectAvatar = () => {
    api
      .patch(
        `/users/${userLoggedId}`,
        { img: isActive },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {})
      .catch((err) => console.log(err));
    history.push("/profile");
  };
  console.log(userLoggedInfo);
  return (
    <Container>
      <ImgContainer
        onClick={() => setIsActivie(imgMan1)}
        active={isActive === imgMan1 && true}
        src={imgMan1}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgWoman1)}
        active={isActive === imgWoman1 && true}
        src={imgWoman1}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgMan2)}
        active={isActive === imgMan2 && true}
        src={imgMan2}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgWoman2)}
        active={isActive === imgWoman2 && true}
        src={imgWoman2}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgMan3)}
        active={isActive === imgMan3 && true}
        src={imgMan3}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgWoman3)}
        active={isActive === imgWoman3 && true}
        src={imgWoman3}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgMan4)}
        active={isActive === imgMan4 && true}
        src={imgMan4}
      ></ImgContainer>
      <ImgContainer
        onClick={() => setIsActivie(imgWoman4)}
        active={isActive === imgWoman4 && true}
        src={imgWoman4}
      ></ImgContainer>
      <Button onClick={selectAvatar}>Selecionar</Button>
    </Container>
  );
};
export default ChoiceAvatar;
