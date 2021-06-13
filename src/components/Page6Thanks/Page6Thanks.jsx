import { useHistory } from "react-router-dom";

function Page6Thanks() {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const handleHistory = () => {
    history.push("/admin");
  };

  return (
    <div className="display">
      <p className="prompt">Thanks!</p>

      <button onClick={handleHistory} className="prompt button">
        Admin Demo
      </button>
      <p></p>
      <button onClick={handleHome} className="prompt button">
        Restart
      </button>
    </div>
  );
}

export default Page6Thanks;

//need axios put and axios delete here
