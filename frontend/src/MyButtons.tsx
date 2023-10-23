import { Button } from "@mui/material";

type MyButtonsType = {
  handleClickToIncrease: () => void;
  handleClickToDecrease: () => void;
};

export default function MyButtons(props: MyButtonsType) {
  const { handleClickToDecrease, handleClickToIncrease } = props;

  return (
    <div>
      <Button variant="contained" onClick={handleClickToIncrease}>
        INCREASE
      </Button>
      <div style={{ marginTop: 9 }} />
      <Button variant="outlined" onClick={handleClickToDecrease}>
        DECREASE
      </Button>
    </div>
  );
}
