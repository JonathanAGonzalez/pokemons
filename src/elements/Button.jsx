import './Button.scss';
const Button = ({ action, disable, text }) => {
  return (
    <>
      {disable === null ? (
        <button className="button" disabled onClick={action}>
          {text}
        </button>
      ) : (
        <button className="button" onClick={action}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
