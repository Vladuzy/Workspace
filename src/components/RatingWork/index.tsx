import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Container, Button } from "./style";
interface Data {
  rating: string;
}
interface Params {
  id: string;
}
const RatingWork = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const history = useHistory();
  const handleData = () => {
    console.log(value);
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
      <Button onClick={() => handleData()} type="button">
        Avaliar
      </Button>
    </Container>
  );
};
export default RatingWork;
