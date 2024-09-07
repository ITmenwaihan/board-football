// 主题的状态

import { createSlice } from '@reduxjs/toolkit';

const themeData = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme'),
  },
  reducers: {
    getTheme: (state) => {
      let value = localStorage.getItem('theme');
      if (value === 'system') {
        value = window.matchMedia('(prefers-color-scheme: light)')?.matches? 'light' : 'dark';
      }
      state.value = value;
    }
  }
});

export const { getTheme } = themeData.actions;

export default themeData.reducer
