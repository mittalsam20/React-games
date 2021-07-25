import "./rightcont.css";
import Switch from "@material-ui/core/Switch";
import { useEffect, useState } from "react";
const Rightcont = (props) => {
  const { setDifficulty } = props;
  const [difswitch, setDifswitch] = useState(false);
  useEffect(() => {}, [difswitch]);

  return (
    <>
      <div className="right-main-cont">
        <h1 style={{ fontSize: "40px", margin: "20px 0" }}>HighScore</h1>
        <h1>9121</h1>
        <br />
        <h1>Your Score</h1>
        <h1>9121</h1>

        <div className="switch-cont">
          <p>Easy</p>
          <Switch
            checked={difswitch}
            onChange={(e) => {
              setDifswitch(e.target.checked);
              setDifficulty((prev) => {
                if (prev === "easy") return "hard";
                else return "easy";
              });
            }}
            name="difswitch"
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p>Hard</p>
        </div>
      </div>
    </>
  );
};

export default Rightcont;
