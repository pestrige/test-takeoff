import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { authorize, unAuthorize } from './action';
const initialState = {
  status: AuthorizationStatus.NO_AUTH,
  userData: {},
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authorize, (state, action) => {
      state.status = action.pauload.status;
      state.userData = action.payload.userData;
    })
    .addCase(unAuthorize, (state) => {
      state.status = AuthorizationStatus.NO_AUTH;
      state.userData = {};
    });
});
