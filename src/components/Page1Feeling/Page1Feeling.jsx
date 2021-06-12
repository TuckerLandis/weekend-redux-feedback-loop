import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

import Button from "@material-ui/core/Button";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";
import "./Page1Feeling.css";

function Page1Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState("1  -  5");

  //

  const handleSubmit = () => {
    console.log("clicked next");
    if (feeling === "1  -  5") {
      alert("please select a number 1-5");
      return;
    }

    dispatch({
      type: "ADD_FEELING",
      payload: Number(feeling),
    });
    setFeeling("1  -  5");
    history.push("/understanding");
  };

  return (
    <div className="display">
      <div className="prompt-div">
        <p className="prompt">How are you feeling?</p>
      </div>

      <div className="form-div"> 
        <form onSubmit={handleSubmit}>
          <div className="value">{feeling}</div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={feeling}
            onChange={(evt) => setFeeling(evt.target.value)}
          ></input>

          <div className="button-div">
            <button
              className="button"
              
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page1Feeling;

// const renderSliderDisplay = (feeling) => {
//     let sliderDisplay = 'please select a number 1-5'
//     if (feeling === 0) {
//         return sliderDisplay
//     } else if (feeling > 0) {
//         sliderDisplay = feeling
//         return sliderDisplay
//     }
//   }

//   let sliderDisplay = 'please select'
//   function ifZero (feeling) {
//     let className = 'value'
//     if (feeling = 0) {
//         className = "init-value"
//     } else {
//         className = 'value'
//         sliderDisplay = feeling
//     }
//     return className
//   }
