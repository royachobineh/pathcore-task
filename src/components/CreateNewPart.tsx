import React, { KeyboardEvent, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { addNewPart } from '../actions/parts';

const CreateNewPart = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name.trim().length > 0) {
      setName('');
      dispatch(
        addNewPart({
          name,
          amount: 0,
        })
      );
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!!event && event.code === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="form-container">
      <div className='form-group'>
        <input
          className="form-control"
          value={name}
          placeholder="Enter a name for a new part"
          onKeyDown={handleKeyDown}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleClick}>
        Create Part
      </button>
    </div>
  );
};

export default CreateNewPart;
