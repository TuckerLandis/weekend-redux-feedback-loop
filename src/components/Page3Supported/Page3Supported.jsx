import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";

import Button from '@material-ui/core/Button'
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

function Page3Support() {
  const history = useHistory();

  const [supported, setSupported] = useState('1  -  5');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (supported === '1  -  5') {
      alert("please enter a number");
      return;
    }

    dispatch({
      type: "ADD_SUPPORTED",
      payload: Number(supported),
    });
    setSupported('1  -  5');
    history.push("/comments");
  };

  return (
    <div className="display">
    <p className="prompt">How supported are you feeling?</p>
    <form onSubmit={handleSubmit}>
    <div className="value">{supported}</div>
  <input type="range" min="1" max="5" step="1" value={supported}
        onChange={(evt) => setSupported(evt.target.value)}
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

export default Page3Support;
