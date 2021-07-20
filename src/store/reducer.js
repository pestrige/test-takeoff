import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { authorize, unAuthorize, setSendingFlag, loadContacts } from './action';
const initialState = {
  status: AuthorizationStatus.NO_AUTH,
  userData: {},
  isSending: false,
  isDataLoaded: false,
  contacts: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authorize, (state, action) => {
      state.status = action.payload.status;
      state.userData = action.payload.userData;
    })
    .addCase(unAuthorize, (state) => {
      state.status = AuthorizationStatus.NO_AUTH;
      state.userData = {};
    })
    .addCase(setSendingFlag, (state, action) => {
      state.isSending = action.payload;
    })
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
      state.isDataLoaded = true;
    });
});
