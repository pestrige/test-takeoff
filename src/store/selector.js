import { AuthorizationStatus } from '../const';

export const getIsAuth = (store) => store.status === AuthorizationStatus.AUTH;
export const getUserData = (store) => store.userData;
export const getIsSending = (store) => store.isSending;
export const getIsContactsLoaded = (store) => store.isDataLoaded;
export const getContacts = (store) => store.contacts;
export const getFilteredContacts = (store) => (
  store.contacts.filter(({name}) => name.toLowerCase().includes(store.filter)));
export const getModalData = (store) => store.modal;
export const getError = (store) => store.error;
