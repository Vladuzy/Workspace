import Rating from "@material-ui/lab/Rating";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Container, Button } from "./style";
import api from "../../service/api";
import { useAuth } from "../../providers/AuthProvider";

interface RatingWorkParams {
  id: string;
  showModal: boolean;
}

interface Params {
  id: string;
}
const RatingWork = () => {
  const [value, setValue] = React.useState<number | null>(0);

  const { token } = useAuth();
  const { id } = useParams() as Params;
  const history = useHistory();

  const handleData = (id: string, value: number | null) => {
    console.log(value);
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
        console.log(response);

        //Show Toast
      })
      .catch((err) => console.log(err));
    history.goBack();
  };
  return (
    <Container>
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
    </Container>
  );
};
export default RatingWork;
