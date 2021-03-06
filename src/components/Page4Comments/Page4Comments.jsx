import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

import TextField from "@material-ui/core/TextField";

function Page4Comments() {
  const history = useHistory();

  const [comments, setComments] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");

    dispatch({
      type: "ADD_COMMENTS",
      payload: comments,
    });

    setComments("");
    history.push("/review");
  };

  return (
    <div className="display">
      <p className="prompt">Any comments or questions?</p>
      <form onSubmit={handleSubmit}>
        <TextField
          className="text-field "
          id="standard-multiline-static"
          label="Comments"
          multiline
          rows={4}
          type="text"
          onChange={(evt) => setComments(evt.target.value)}
        />
        <div className="button-div">
          <button className="button" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page4Comments;
