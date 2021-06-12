import axios from "axios";
import feedbackLocal from "../../feedback.data.js";
import { useHistory } from "react-router-dom";

import "./Page5Review.css";

function Page5Review() {
  const history = useHistory();
  const handleSubmit = () => {
    // swal here

    axios
      .post("/fbRouter", feedbackLocal)
      .then((response) => {
        console.log(response);
        feedbackLocal.feeling = 0;
        feedbackLocal.understanding = 0;
        feedbackLocal.support = 0;
        feedbackLocal.comments = "";

        history.push("/thanks");
      })
      .catch((error) => {
        console.log("error in post", error);
      });
  };

  return (
    <div className="display">
      <p className="prompt">Does this look right?</p>
      <ul className="review-list">
        <li>
          You're feeling:
          <span className="review-sub-text">{feedbackLocal.feeling}</span>
        </li>
        <li>
          Understanding:
          <span className="review-sub-text">{feedbackLocal.understanding}</span>
        </li>
        <li>
          Supported:
          <span className="review-sub-text">{feedbackLocal.support}</span>
        </li>
        <li>
          Comments: <br />
          <span className="review-sub-text-comments">
            {feedbackLocal.comments}
          </span>
        </li>
      </ul>

      <button onClick={handleSubmit} className="prompt button">
        Submit
      </button>
    </div>
  );
}

export default Page5Review;
