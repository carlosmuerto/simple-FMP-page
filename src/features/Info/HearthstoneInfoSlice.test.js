import HearthstoneInfoReducer from './HearthstoneInfoSlice';
import loadingStatus from '../reduxConst';

describe('Hearthstone Info Reducer', () => {
  const initialState = {
    info: [],
    status: loadingStatus.idle,
    error: null,
  };

  it('should handle initial state', () => {
    expect(HearthstoneInfoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('on FETCH/fulfilled shound ignore path and add a class to info', async () => {
    const initialState = {
      info: [],
      status: loadingStatus.idle,
      error: null,
    };

    const action = {
      type: 'Hearthstone/info/FETCH/fulfilled',
      payload: {
        patch: '24.4.0.150659',
        classes: ['Death Knight'],
      },
    };

    const actual = HearthstoneInfoReducer(initialState, action);

    expect(actual).toEqual({
      info: { classes: ['Death Knight'] },
      status: 'IDLE',
      error: null,
      loading: 'SUCCEEDED',
    });
  });

  /*

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
  */
});
