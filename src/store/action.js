import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AuthorizationStatus, ModalType } from '../const';

const ActionType = {
  AUTHORIZE: 'authorize',
  UNAUTHORIZE: 'unauthorize',
  SET_SENDING_FLAG: 'setSendingFlag',
  LOAD_CONTACTS: 'loadContacts',
  UPDATE_CONTACTS: 'updateContacts',
  SET_MODAL_OPEN: 'setModalOpen',
  SET_FILTER: 'setFilter',
  SET_ERROR: 'setError',
};

export const authorize = createAction(ActionType.AUTHORIZE, (authInfo) => ({payload: authInfo}));
export const unAuthorize = createAction(ActionType.UNAUTHORIZE);
export const setSendingFlag = createAction(ActionType.SET_SENDING_FLAG, (flag) => ({payload: flag}));
export const loadContacts = createAction(ActionType.LOAD_CONTACTS, (contacts) => ({payload: contacts}));
export const updateContacts = createAction(ActionType.UPDATE_CONTACTS, (contact) => ({payload: contact}));
export const setModal = createAction(ActionType.SET_MODAL_OPEN, (data) => ({payload: data}));
export const setFilter = createAction(ActionType.SET_FILTER, (filter) => ({payload: filter}));
export const setError = createAction(ActionType.SET_ERROR, (error) => ({payload: error}));

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
export const postContact = ({name, email}) => (dispatch, getState, api) => (
  api.post(ApiRoute.CONTACTS, {name, email})
    .then(({data}) => {
      const contacts = getState().contacts.slice(); // JSON Live Server aren't persisted any changes
      const randomID = Math.floor(Math.random() * 10000); // so it needs
      contacts.unshift({...data, id: randomID}); // to get correct data
      dispatch(setSendingFlag(false));
      dispatch(setModal({isOpen: false, type: ModalType.NEW}));
      dispatch(updateContacts(contacts));
    })
    .catch(({response}) => {
      dispatch(setSendingFlag(false));
      dispatch(setError({
        isOpen: true,
        message: `Error ${response.status}: ${response.statusText}`,
      }));
    })
);
export const putContact = ({name, email, id}) => (dispatch, getState, api) => (
  api.put(`${ApiRoute.CONTACTS}/${id}`, {name, email})
    .then(({data}) => {
      const contacts = getState().contacts.slice(); // JSON Live Server aren't persisted any changes
      const oldContactIndex = contacts.findIndex((contact) => contact.id === data.id); // so it needs
      contacts.splice(oldContactIndex, 1, data); // to get correct data
      dispatch(setSendingFlag(false));
      dispatch(setModal({isOpen: false, type: ModalType.NEW}));
      dispatch(updateContacts(contacts));
    })
    .catch(({response}) => {
      dispatch(setSendingFlag(false));
      dispatch(setError({
        isOpen: true,
        message: `Error ${response.status}: It looks like a fake data, please edit another contact`,
      }));
    })
);
export const deleteContact = (id) => (dispatch, getState, api) => (
  api.delete(`${ApiRoute.CONTACTS}/${id}`)
    .then(() => {
      const contacts = getState().contacts.slice(); // JSON Live Server aren't persisted any changes
      const oldContactIndex = contacts.findIndex((contact) => contact.id === id); // so it needs
      contacts.splice(oldContactIndex, 1); // to get correct data
      dispatch(updateContacts(contacts));
    })
    .catch(({response}) => {
      dispatch(setSendingFlag(false));
      dispatch(setError({
        isOpen: true,
        message: `Error ${response.status}: It looks like a fake data, please delete another contact`,
      }));
    })
);

