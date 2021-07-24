import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Scoretable from "../../components/scoretable/scoretable";
import "./home.css";
import { useHistory } from "react-router-dom";
const Username = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  return (
    <div className="cont">
      <div className="username-form">
        <form>
          <Input
            type="text"
            value={username}
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (username !== "" || username !== " ") {
                if (username) {
                  console.log("hello");
                  history.push("/allgames");
                }
              }
            }}
          >
            GO..!!
          </Button>
        </form>
      </div>

      <div className="highscoretable">
        <div className="scoreheading">
          <h1>LEADERBOARD</h1>
        </div>
        <div className="subheading">
          <h3>Gotta Beat Them All..!!!</h3>
        </div>
        <Scoretable />
      </div>
    </div>
  );
};

export default Username;
