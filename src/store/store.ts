import { configureStore } from '@reduxjs/toolkit';
import  themeData  from './theme';

export default configureStore({
  reducer: {
    theme: themeData
  }
})