import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AuthorizationStatus } from '../const';

const ActionType = {
  AUTHORIZE: 'authorize',
  UNAUTHORIZE: 'unauthorize',
  SET_SENDING_FLAG: 'setSendingFlag',
  LOAD_CONTACTS: 'loadContacts',
};

export const authorize = createAction(ActionType.AUTHORIZE, (authInfo) => ({payload: authInfo}));
export const unAuthorize = createAction(ActionType.UNAUTHORIZE);
export const setSendingFlag = createAction(ActionType.SET_SENDING_FLAG, (flag) => ({payload: flag}));
export const loadContacts = createAction(ActionType.LOAD_CONTACTS, (contacts) => ({payload: contacts}));

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setSendingFlag(false));
      dispatch(authorize({
        status: AuthorizationStatus.AUTH,
        userData: data,
      }));
    })
    .catch(() => dispatch(setSendingFlag(false)))
);
export const fetchContacts = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.CONTACTS)
    .then(({data}) => dispatch(loadContacts(data)))
);

