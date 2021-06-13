import axios from "axios";

function ReviewItem({ item, getDbFeedback }) {
  let ID = item.id;

  const flagItem = () => {
    console.log(item);
    axios
      .put(`/fbRouter/${ID}`)
      .then((response) => {
        getDbFeedback();
      })
      .catch((error) => {
        console.log("error in PUT", error);
      });
  };

  const unFlagItem = () => {
    axios
      .put(`/fbRouter/un/${ID}`)
      .then((response) => {
        getDbFeedback();
      })
      .catch((error) => {
        console.log("error in PUT", error);
      });
  };

  const handleFlag = () => {
    if (!item.flagged) {
      flagItem();
    } else if (item.flagged) {
      unFlagItem();
    }
  };

  const deleteItem = () => {
    axios
      .delete(`/fbRouter/${ID}`)
      .then((response) => {
        getDbFeedback();
      })
      .catch((error) => {
        console.log("error in DEL", error);
      });
  };

  return (
    <tr>
      <td>{item.feeling}</td>
      <td>{item.understanding}</td>
      <td>{item.support}</td>
      <td>{item.comments}</td>
      <td>
        <button className="button-review" onClick={deleteItem}>
          Delete
        </button>
      </td>
      <td>
        {item.flagged ? (
          <button className="button-review" onClick={handleFlag}>
            🚩
          </button>
        ) : (
          <button className="button-review" onClick={handleFlag}>
            flag
          </button>
        )}
      </td>
    </tr>
  );
}

export default ReviewItem;
