import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

function Page0Start() {
  const history = useHistory();

  const handleNext = () => {
    console.log("clicked next");
    history.push("/feeling");
  };

  return (
    <div className="display">
      <div className="prompt-div">
        <p className="prompt">Daily Check-In</p>
      </div>

      <div className="s-button-div">
        <button onClick={handleNext} className="prompt button">
          Start
        </button>
      </div>
    </div>
  );
}

export default Page0Start;
