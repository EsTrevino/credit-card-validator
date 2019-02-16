import React from 'react';
import { isEmpty } from '../util/checkIfEmpty';
import Type from './type';
import Verified from './verified';

const Info = props => {
  const { resultInfo } = props;

  let displayImage = resultInfo => {
    if (isEmpty(resultInfo) === true) {
      return '';
    }

    return resultInfo.valid === true ? (
      <Type type={resultInfo.type} />
    ) : (
      <p className="text-danger font-weight-bold">Invalid</p>
    );
  };

  return (
    <div className="jumbotron col-12">
      <div className="row justify-content-center mb-3">
        <h5>Information</h5>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <span className="font-weight-bold">Input: </span>
          <p>{resultInfo.num}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <Verified valid={resultInfo.valid} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <span className="font-weight-bold">Type: </span>
          {displayImage(resultInfo)}
        </div>
      </div>
    </div>
  );
};

export default Info;
