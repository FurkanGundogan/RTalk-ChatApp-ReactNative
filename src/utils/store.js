import {createSlice, configureStore} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});


const chatListSlice = createSlice({
  name: 'chatList',
  initialState: [],
  reducers: {
    setChatList: (state, action) => {
      const list=action.payload
      if(list===null) return null
      return list
    },  
  },
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      /// payload ile setlemeyi düzelt
      const messages=action?.payload
      const chatId=action?.payload[0]?.data?.chatId
      if(chatId===null) return state
      return [...state,{chatId:chatId,messageList:messages}]
    },  
  },
});

export const {signIn, updateUser,logOut} = authSlice.actions;
export const {setChatList} = chatListSlice.actions;
export const {setMessages} = messagesSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    chatList: chatListSlice.reducer,
    messages: messagesSlice.reducer,
  },
});