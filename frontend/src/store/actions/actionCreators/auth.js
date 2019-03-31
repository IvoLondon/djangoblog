import * as actionTypes from '../actionTypes';

export const userSignIn = () => {
    return ({
        type: actionTypes.USER_SIGNIN,
    })
}

export const userSignOut = () => {
    return ({
        type: actionTypes.USER_SIGNOUT,
    })
}

export const userSignUp = () => {
    return ({
        type: actionTypes.USER_SIGNUP,
    })
}