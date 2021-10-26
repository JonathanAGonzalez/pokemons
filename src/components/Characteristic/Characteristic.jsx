const Characteristic = ({ title, characteristic }) => {
  return (
    <>
      <hr />
      <p>
        <strong>{title}: </strong>
        <br />
      </p>
      <ul>{characteristic}</ul>
    </>
  );
};

export default Characteristic;
