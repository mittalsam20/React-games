import { useState, useRef, useEffect } from "react";
import Heading from "../../components/heading";
import Rightcont from "../../components/rightcont/rightcont";
import "./molestart.css";
const Molestart = () => {
  const dirt = useRef([]);
  const [moledifficulty, setMoledifficulty] = useState("easy");
  const [lasthole, setLasthole] = useState(null);
  const noOfDirts =
    moledifficulty === "easy"
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const randomtime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const randomhole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    // console.log(idx);
    const hole = dirt.current[idx];
    // console.log("last hole and this hole", lasthole, hole);
    if (lasthole === hole) {
      console.log("same same");
      return randomhole(dirt.current);
    }

    if (moledifficulty === "easy") {
      if (idx === 0 || idx === 5) {
        return randomhole(dirt.current);
      } else if (idx > 9) {
        return randomhole(dirt.current);
      }
    } else {
      if (idx === 0 || idx === 5 || idx === 10) {
        return randomhole(dirt.current);
      }
    }
    setLasthole(dirt.current[idx]);
    // console.log(lasthole);
    return hole;
  };

  const peep = () => {
    const time = randomtime(200, 1000);
    const hole = randomhole(dirt.current);
    console.log(time, hole);
  };

  useEffect(() => {
    peep();
  }, [moledifficulty]);

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
                  ref={(x) => (dirt.current[ele] = x)}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="mole-settings">
        <Rightcont setDifficulty={setMoledifficulty} />
      </div>
    </div>
  );
};

export default Molestart;
