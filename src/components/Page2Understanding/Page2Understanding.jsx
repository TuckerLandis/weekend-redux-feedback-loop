import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";

function Page2Understanding() {
  const history = useHistory();

  const [understanding, setUnderstanding] = useState(-1);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (understanding === -1) {
      alert("please enter a number");
      return;
    }

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: Number(understanding),
    });
    setUnderstanding(-1);
    history.push("/support");
  };

  return (
    <div className="display">
      <p>How well did you understand today's content?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          required
          onChange={(evt) => setUnderstanding(evt.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Page2Understanding;
