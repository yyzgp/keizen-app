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

const initialState = {
    name: null,
    token: null,
    loginState: false,
    item: { "id": "","barcode": "", "name": "", "phone": "", "stock": "", "url": "", "completed": ""},

    //INITIALIZATION OF LIST SHOULD BE RETIREVED FROM DATABASE. THIS HARDCODED DATA IS JUST FOR TESTNG.
    list: [
        { "id": "1", "barcode": "1", "name": "Item 1", "phone": "12345678", "stock": 5, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "yes" },
        { "id": "2", "barcode": "2", "name": "Item 2", "phone": "23456781", "stock": 10, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "no" },
        { "id": "3", "barcode": "3", "name": "Item 3", "phone": "34567812", "stock": 13, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "yes" },
        { "id": "4", "barcode": "4", "name": "Item 4", "phone": "45678123", "stock": 6, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "no" },
        { "id": "5", "barcode": "5", "name": "Item 5", "phone": "56781234", "stock": 8, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "yes" },
        { "id": "6", "barcode": "6", "name": "Item 6", "phone": "67812345", "stock": 10, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "no" },
        { "id": "7", "barcode": "7", "name": "Item 7", "phone": "78123456", "stock": 9, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "yes" },
        { "id": "8", "barcode": "8", "name": "Item 8", "phone": "81234567", "stock": 3, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "no" },
        { "id": "9", "barcode": "9", "name": "Item 9", "phone": "00000001", "stock": 1, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "yes" },
        { "id": "10", "barcode": "10", "name": "Item 10", "phone": "00000002", "stock": 2, "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png", "completed": "no" },
        ]
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, name: action.payload };
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_LOGIN_STATE:
            return { ...state, loginState: action.payload };
        case SET_ITEM:
            return { ...state, item: action.payload };
        case SET_LIST:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}