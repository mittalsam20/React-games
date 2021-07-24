import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Scoretable from "../../components/scoretable/scoretable";
import "./username.css";
const Username = () => {
  return (
    <div className="cont">
      <div className="username-form">
        <form>
          <Input type="text" />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
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
