import { AuthorizationStatus } from '../const';

export const getIsAuth = (store) => store.status === AuthorizationStatus.AUTH;
export const getUserData = (store) => store.userData;
export const getIsSending = (store) => store.isSending;
export const getIsContactsLoaded = (store) => store.isDataLoaded;
export const getContacts = (store) => store.contacts;
