import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Verified = props => {
  const { valid } = props;

  const validFunction = valid => {
    if (valid === undefined) {
      return '';
    } else if (valid === true) {
      return <FontAwesomeIcon className="text-success" icon={faCheck} />;
    } else {
      return <FontAwesomeIcon className="text-danger" icon={faTimes} />;
    }
  };

  const displayText = valid => {
    if (valid === undefined) {
      return '';
    } else if (valid === true) {
      return 'This card has passed the luhn algorithm check and is a valid account number';
    } else {
      return 'this card failed the luhn algorithm check';
    }
  };

  return (
    <>
      <span className="font-weight-bold">Verified: </span>
      <span className="pl-2">{validFunction(valid)}</span>
      <p>{displayText(valid)}</p>
    </>
  );
};

export default Verified;
