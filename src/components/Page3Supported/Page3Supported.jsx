import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";

function Page3Support() {
  const history = useHistory();

  const [supported, setSupported] = useState(-1);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (supported === -1) {
      alert("please enter a number");
      return;
    }

    dispatch({
      type: "ADD_SUPPORTED",
      payload: Number(supported),
    });
    setSupported(-1);
    history.push("/comments");
  };

  return (
    <div className="display">
      <p>How supported are you feeling today?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          required
          onChange={(evt) => setSupported(evt.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Page3Support;
