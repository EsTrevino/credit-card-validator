import React from 'react';

const Type = props => {
  let { type } = props;
  return (
    <>
      <p className="text-info font-weight-bold">{type}</p>
    </>
  );
};

export default Type;
