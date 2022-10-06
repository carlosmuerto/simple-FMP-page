import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HearthstoneAPI from '../HearthstoneAPI/HearthstoneAPI';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'Hearthstone/info';

const initialState = {
  info: [],
  status: loadingStatus.idle,
  error: null,
};

const fetchInfo = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async () => HearthstoneAPI.fetchInfo(),
);

const HearthstoneInfoSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInfo.pending, (state) => {
      state.loading = loadingStatus.pending;
    })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        const obj = {};
        Object.keys(action.payload).forEach((key) => {
          if (key !== 'patch' && key !== 'locales') {
            obj[key] = [...new Set(action.payload[key])];
          }
        });
        state.info = obj;
      })
      .addCase(fetchInfo.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = HearthstoneInfoSlice;

export { actions, fetchInfo };

export default reducer;
