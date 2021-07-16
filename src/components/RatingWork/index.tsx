import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import React, { Dispatch } from "react";
import { BackgroundContainer, RatingContainer, Button } from "./style";
import api from "../../service/api";
import { useAuth } from "../../providers/AuthProvider";
import { SetStateAction } from "react";

interface RatingWorkProps {
  id: string;
  setShowRating: Dispatch<SetStateAction<boolean>>;
}

const RatingWork = ({ setShowRating, id }: RatingWorkProps) => {
  const [value, setValue] = React.useState<number | null>(0);

  const { token } = useAuth();
  const history = useHistory();

  const handleData = (id: string, value: number | null) => {
    api
      .patch(
        `/jobs/${id}`,
        { rating: value?.toString() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setShowRating(false);
      })
      .catch((err) => console.log(err));
    history.goBack();
  };
  return (
    <BackgroundContainer>
      <RatingContainer>
        <h2>Avalie o trabalho feito!</h2>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button onClick={() => handleData(id, value)} type="button">
          Avaliar
        </Button>
      </RatingContainer>
    </BackgroundContainer>
  );
};
export default RatingWork;
