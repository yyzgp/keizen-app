export const SET_USERNAME = 'SET_USERNAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export const SET_ITEM = 'SET_ITEM';
export const SET_LIST = 'SET_LIST';

export const setName = name => ({
    type: SET_USERNAME,
    payload: name,
});

export const setToken = token => ({
    type: SET_TOKEN,
    payload: token,
});

export const setLoginState = loginState => ({
    type: SET_LOGIN_STATE,
    payload: loginState,
});

export const setItem = item => ({
    type: SET_ITEM,
    payload: item,
});

export const setList = list => ({
    type: SET_LIST,
    payload: list,
});