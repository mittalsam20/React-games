const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <>
      <div>
        <button onClick={onClick}>{value}</button>
      </div>
    </>
  );
};

export default Square;
