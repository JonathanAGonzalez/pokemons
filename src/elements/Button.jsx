import { Fragment } from 'react';
import './Button.scss';

const Button = ({ action, text, previous, next }) => {
  return (
    <Fragment>
      {previous !== 'null' ? (
        <button className="button" onClick={action}>
          {text}
        </button>
      ) : (
        <button disabled className="button" onClick={action}>
          {text}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
