import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./services/hook";
import initialize from "./services/app/thunks/initialize";
import { AppState } from "./services/store";
import increase from "./services/app/thunks/increase";

function App() {
  const dispatch = useAppDispatch();
  const { currentCount, submissionState } = useAppSelector(
    (state: AppState) => state.app
  );

  React.useEffect(() => {
    dispatch(initialize());
  }, []);

  const handleClickToIncrease = () => {
    dispatch(increase());
  };

  return (
    <>
      <h1>Counter smart contract</h1>
      <h2>
        Current counter {submissionState === "PENDING" ? "..." : currentCount}
      </h2>
      <button onClick={handleClickToIncrease}>INCREASE</button>
    </>
  );
}

export default App;
