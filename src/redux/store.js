import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/credreducers';

export default configureStore({
  reducer: {
    selectedItems: cartReducer,
    
  }
})