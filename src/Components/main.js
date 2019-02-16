import React from 'react';
import Info from './info';

const Main = props => {
  const { result, formValue, onChange, submit } = props;
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-8 ">
          <h3 className="text-center">Credit Card Validator</h3>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <p className="text-center text-secondary">
            Enter your card number below
          </p>
          <form>
            <div className="row p-4">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control mt-2 mb-3"
                  placeholder="card input"
                  onChange={onChange}
                  value={formValue}
                />
              </div>
              <div className="col-md-3">
                <center>
                  <button
                    onClick={submit}
                    className="btn btn-lg btn-success align-self-center"
                  >
                    Submit
                  </button>
                </center>
              </div>
            </div>
          </form>
          <div className="row">
            <Info resultInfo={result} />
          </div>
        </div>
        <div className="col-md-6 text-left p-5 mt-2">
          <h5 className="mt-3">Luhn Algorithm Check</h5>
          <p>
            We'll check your number against the Luhn Algorithm to see if it is a
            valid credit card number. No information is saved
          </p>
          <h5>Major Industry Identifier</h5>
          <p>
            The first digit of a credit card number represent the category of
            entity which issued the card.
          </p>
          <h5>Issuer identification number</h5>
          <p>
            The first six digits of a card number identify the institution that
            issued the card to the card holder.
          </p>
          <h5>Personal Account Number</h5>
          <p>
            Digits 7 to final number minus 1 (the last is the checksum) indicate
            the individual account identifier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
