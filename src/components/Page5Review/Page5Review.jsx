import axios from "axios";
// import feedbackLocal from "../../feedback.data.js";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

import "./Page5Review.css";

function Page5Review() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const localFeedback = useSelector((state) => state.localFeedback);

  const [feeling, setFeeling] = useState(localFeedback.feeling);
  const [understanding, setUnderstanding] = useState(
    localFeedback.understanding
  );
  const [supported, setSupported] = useState(localFeedback.supported);
  const [comments, setComments] = useState(localFeedback.comments);

  // When done editing, send a full dispatch to local feedback reducer
  const handleDone = () => {
    dispatch({
      type: "ADD_FEELING",
      payload: Number(feeling),
    });

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: Number(understanding),
    });

    dispatch({
      type: "ADD_SUPPORTED",
      payload: Number(supported),
    });

    dispatch({
      type: "ADD_COMMENTS",
      payload: comments,
    });
    setIsEdit(false);
  };

  // upon actual submit, send an axios post, 
  // data = local feedback reducer, reset local feedback reducer, navigate to thanks
  const handleSubmit = () => {
    axios
      .post("/fbRouter", localFeedback)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "SUBMIT_FEEDBACK",
        });
        history.push("/thanks");
      })
      .catch((error) => {
        console.log("error in post", error);
      });
  };

  // edit mode flow control
  const isEditRender = (isEdit) => {
    if (!isEdit) {
      return (
        <div className="display">
          <p className="prompt-review">Does this look right?</p>
          <button onClick={() => setIsEdit(true)} className="prompt button">
            Edit
          </button>
          <div className="review-list">
            <p>
              You're feeling:
              <br />
              <p className="review-sub-text">{feeling}</p>
            </p>
            <p>
              Understanding:
              <br />
              <p className="review-sub-text">{understanding}</p>
            </p>
            <p>
              Supported:
              <br />
              <p className="review-sub-text">{supported}</p>
            </p>
            <p>
              Comments: <br />
              <p className="review-sub-text-comments">{comments}</p>
            </p>
          </div>

          <button onClick={handleSubmit} className="prompt button">
            Submit
          </button>
        </div>
      );
      // ---------------------  [ The above is rendered if edit mode is false, the below if true ]
    } else {      
      return (
        <div className="display">
          <p className="review-prompt">Editing...</p>

          <div className="review-list"></div>
          <form>
            <div className="value-review">{feeling}</div>
            <p>Feeling</p>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={feeling}
              onChange={(evt) => setFeeling(evt.target.value)}
            ></input>
            <div className="value-review">{understanding}</div>
            <p>Understanding</p>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={understanding}
              onChange={(evt) => setUnderstanding(evt.target.value)}
            ></input>
            <div className="value-review">{supported}</div>
            Supported
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={supported}
              onChange={(evt) => setSupported(evt.target.value)}
            ></input>
            <TextField
              className="text-field "
              id="standard-multiline-static"
              label="Comments"
              value={comments}
              multiline
              rows={4}
              type="text"
              onChange={(evt) => setComments(evt.target.value)}
            />
            <p></p>
            <button onClick={handleDone} className="prompt button">
              Done
            </button>
          </form>
        </div>
      );
    }
  };
// actual render return
  return isEditRender(isEdit);
}

export default Page5Review;
