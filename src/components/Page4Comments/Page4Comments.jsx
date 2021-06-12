import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ForwardRoundedIcon from "@material-ui/icons/ForwardRounded";

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
        <div className="next-button-div">
          <Button
            className="next-button"
            variant="outlined"
            color="primary"
            type="submit"
          >
            <ForwardRoundedIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page4Comments;
