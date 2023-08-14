import { AnyAction } from 'redux';
import { DECREMENT_PART, INCREMENT_PART, ADD_NEW_PART } from '../../actions/parts';

// import { v4 as uuid } from 'uuid';

const initialState = [
  {
    name: 'Wheel',
    amount: 0,
  },
  {
    name: 'Chasis',
    amount: 0,
  },
  {
    name: 'Engine',
    amount: 0,
  },
  {
    name: 'Windshield',
    amount: 0,
  },
];

const partsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_PART: {
      return state.map(part => {
        if(part.name === action.partName) {
          return {
            ...part,
            amount: part.amount + 1
          };
        }
        return part;
      });
    }
    case DECREMENT_PART: {
      return state.map(part => {
        if(part.name === action.partName) {
          return {
            ...part,
            amount: part.amount > 0 && part.amount - 1 || 0
          };
        }
        return part;
      });
    }
    case ADD_NEW_PART: {
      const newPart = action.newPart as {name: string; amount: number};
      return state.concat(newPart);
    }

    default:
      return state;
  }
};

export default partsReducer;
