import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userInfo: { 'name':'123'},

  messageList: [], // { id: number, type: 'alert or confirm', message: 'string', onOk: func() }   alert 및 confirm 공통 객체
  toastMessageList: [],
};


export const { actions, reducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetStore: (state) => ({
      ...initialState,
    }),
    updateStore: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    addMessage: (state, { payload }) => {
      state.messageList = [...state.messageList, payload];
    },
    removeMessage: (state, { payload }) => {
      state.messageList = state.messageList.filter((v) => v.id !== payload);
    },
    addToastMessage: (state, { payload }) => {
      state.toastMessageList = [...state.toastMessageList, payload];
    },
    removeToastMessage: (state, { payload }) => {
      state.toastMessageList = state.toastMessageList.filter((v) => v.id !== payload);
    },
  },
});

export const {
  updateStore,
  addMessage,
  removeMessage,
  addToastMessage,
  removeToastMessage,
} = actions;

export default reducer;
