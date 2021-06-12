import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";


import Button from '@material-ui/core/Button'
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';

function Page2Understanding() {
  const history = useHistory();

  const [understanding, setUnderstanding] = useState('1  -  5');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (understanding === '1  -  5') {
      alert("please select a number 1-5");
      return;
    }

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: Number(understanding),
    });
    setUnderstanding('1  -  5');
    history.push("/support");
  };

  return (
    <div className="display">
    <p className="prompt">How well did you understand today's content?</p>
    <form onSubmit={handleSubmit}>
    <div className="value">{understanding}</div>
  <input type="range" min="1" max="5" step="1" value={understanding}
        onChange={(evt) => setUnderstanding(evt.target.value)}
      ></input>
      <div className="next-button-div">
      <Button className="next-button" variant="outlined" color="primary" type="submit">
      <ForwardRoundedIcon />
    </Button>

      </div>
    </form>

   
  </div>
  );
}

export default Page2Understanding;
