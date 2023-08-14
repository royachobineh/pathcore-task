import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import CreateNewPart from '../components/CreateNewPart';
import { decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.sass';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="column-container">
        <h1>Parts Counter</h1>
        <hr />
        <CreateNewPart />
        <ul className="partsList">
          {parts.map(part => (
            <li
              key={part.name}
              className={`partList ${
                part.name === selectedPart ? 'selected' : ''
              }`}
              onClick={() => setSelectedPart(part.name)}
            >
              <div className="partItem">
                <p>{part.name}</p>
              </div>
              <div className="buttonContainer">
                <button
                  className="btn btn-success btn-round"
                  onClick={e => {
                    dispatch(incrementPart(part.name));
                  }}
                >
                  +
                </button>
                <p>{part.amount}</p>
                <button
                  className="btn btn-danger btn-round"
                  onClick={e => {
                    dispatch(decrementPart(part.name));
                  }}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="column-container">
        <h2>Part Info</h2>
        {selectedPart &&
          (() => {
            const part = parts.find(x => x.name === selectedPart);
            return <PartDescriptor name={part.name} amount={part.amount} />;
          })()}
      </div>
    </div>
  );
};

export default Home;
