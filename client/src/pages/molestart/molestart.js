import { useState } from "react";
import Heading from "../../components/heading";
import Rightcont from "../../components/rightcont/rightcont";
import "./molestart.css";
const Molestart = () => {
  const [difficulty, setDifficulty] = useState("eas");
  const noOfDirts =
    difficulty === "easy"
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="mole-cont">
      <div className="mole-left">
        <Heading heading="WHACK-THE-MOLE" />
        <div className="alldirt">
          {noOfDirts.map((ele, index) => {
            if (index === 4 || index === 9) return <br />;
            return (
              <>
                <img
                  src="images/mole/dirt.svg"
                  alt={`${index}_dirt`}
                  className="dirtsvg"
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="mole-settings">
        <Rightcont />
      </div>
    </div>
  );
};

export default Molestart;
