// map over response data from get request, crete rows of information. tie to "see history page for now"
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ReviewItem from "./ReviewItem";

function Page7Admin() {
  const dbFeedback = useSelector((state) => state.dbFeedback);

  const dispatch = useDispatch();

  const getDbFeedback =() => {
    axios
      .get("/fbRouter")
      .then((response) => {
        dispatch({
          type: "SET_FEEDBACK",
          payload: response.data,
        });
      })
      .catch((error) => {
        alert("Could not access feedback on DB, check log for errors", error);
        console.log("error on GET", error);
      });
  }

  useEffect(() => {
    getDbFeedback();
  }, []);

  return (
    <div className="display">
      <table>
        <tr>
          <th>Feeling</th>
          <th>Understanding</th>
          <th>Supported</th>
          <th>Comments</th>
          <th>Delete</th>
          <th>Flag 🚩</th>
        </tr>
        <tbody>
          {dbFeedback.map((item) => (
            <ReviewItem key={item.id} item={item} getDbFeedback={getDbFeedback} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page7Admin;
