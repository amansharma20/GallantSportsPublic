/* eslint-disable prettier/prettier */
import {AuthService} from '../services/AuthService';
import {AuthConstants} from '../constants/AuthConstants';
import {RequestConstant, ResponseConstant} from '../../utils/constants/CommanConstants';

export const AuthActions = {
  signIn,
  signup
};

function signIn(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.SIGNIN_REQUEST, data));
    const result = await AuthService.signIn(url, data);
    dispatch(
      ResponseConstant(
        AuthConstants.SIGNIN_SUCCESS,
        AuthConstants.SIGNIN_FAILURE,
        result,
      ),
    );
    return result;
  };
}

function signup(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.SIGNUP_REQUEST, data));
    const result = await AuthService.signIn(url, data);
    dispatch(
      ResponseConstant(
        AuthConstants.SIGNUP_SUCCESS,
        AuthConstants.SIGNUP_FAILURE,
        result,
      ),
    );
    return result;
  };
}

  