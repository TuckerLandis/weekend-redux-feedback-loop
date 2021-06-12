import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";

function Page1Feeling() {
  const history = useHistory();

  const [feeling, setFeeling] = useState(-1);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (feeling === -1) {
      alert("please enter a number");
      return;
    }

    dispatch({
      type: "ADD_FEELING",
      payload: Number(feeling),
    });
    setFeeling(-1);
    history.push("/understanding");
  };

  return (
    <div>
      <p>How are you feeling?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          required
          onChange={(evt) => setFeeling(evt.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Page1Feeling;
