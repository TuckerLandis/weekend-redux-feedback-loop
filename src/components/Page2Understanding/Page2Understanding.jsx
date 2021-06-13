import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

function Page2Understanding() {
  const history = useHistory();

  const [understanding, setUnderstanding] = useState("1  -  5");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (understanding === "1  -  5") {
      alert("please select a number 1-5");
      return;
    }

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: Number(understanding),
    });
    setUnderstanding("1  -  5");
    history.push("/support");
  };

  return (
    <div className="display">
      <p className="prompt">How well did you understand today's content?</p>
      <form onSubmit={handleSubmit}>
        <div className="value">{understanding}</div>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={understanding}
          onChange={(evt) => setUnderstanding(evt.target.value)}
        ></input>
        <div className="button-div">
          <button className="button" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page2Understanding;
