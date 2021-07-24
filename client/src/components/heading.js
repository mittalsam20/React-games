const Heading = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 10px 10px 10px",
        fontSize: "27px",
        position: "relative",
        top: "20px",
      }}
    >
      <h1>{props.heading}</h1> <span></span>
    </div>
  );
};

export default Heading;
