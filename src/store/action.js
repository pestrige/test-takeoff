import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AuthorizationStatus } from '../const';

const ActionType = {
  AUTHORIZE: 'authorize',
  UNAUTHORIZE: 'unauthorize',
};

export const authorize = createAction(ActionType.AUTHORIZE, (authInfo) => ({payload: authInfo}));
export const unAuthorize = createAction(ActionType.UNAUTHORIZE);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(authorize({
        status: AuthorizationStatus.AUTH,
        userData: data,
      }));
    })
    //.catch(({response}) => dispatch(showToast(`Error ${response.status}: ${response.statusText}`)))
);
