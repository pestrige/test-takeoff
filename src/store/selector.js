import { AuthorizationStatus } from '../const';

export const getIsAuth = (store) => store.status === AuthorizationStatus.AUTH;
export const getUserData = (store) => store.userData;
