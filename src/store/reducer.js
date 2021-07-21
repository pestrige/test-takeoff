import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { authorize, unAuthorize, setSendingFlag, loadContacts, setModal, setFilter, updateContacts, setError } from './action';
import { ModalType } from '../const';

const initialState = {
  status: AuthorizationStatus.NO_AUTH,
  userData: {},
  isSending: false,
  isDataLoaded: false,
  contacts: [],
  modal: {
    isOpen: false,
    type: ModalType.NEW,
    payload: {},
  },
  filter: '',
  error: {
    isOpen: false,
    message: '',
  },
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
    })
    .addCase(updateContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(setModal, (state, action) => {
      state.modal = action.payload;
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
