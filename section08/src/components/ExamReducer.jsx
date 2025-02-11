import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const ExamReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>exam reducer</h1>
      <h2>{state}</h2>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>+</button>
    </div>
  );
};

export default ExamReducer;
