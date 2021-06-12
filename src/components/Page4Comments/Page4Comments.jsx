import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, HashRouter as Router, Link, useHistory, } from "react-router-dom";

function Page4Comments() {
  const history = useHistory();

  const [comments, setComments] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("clicked next");
    if (comments === '') {
      alert("please enter a some comments");
      return;
    }

    dispatch({
      type: "ADD_COMMENTS",
      payload: comments,
    });
    
    setComments('')
    history.push("/review");
  };

  return (
    <div className="display">
      <p>Any comments or questions?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          onChange={(evt) => setComments(evt.target.value)}
        ></input>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Page4Comments;
