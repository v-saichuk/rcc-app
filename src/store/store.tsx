import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CurrencyListSlice from './Slices/CurrencyListSlice';
import CourseSlice from './Slices/CourseSlice';
import CalculatorSlice from './Slices/CalculatorSlice';
import CurrencyInfo from './Slices/CurrencyInfo';

const reducers = combineReducers({
    CurrencyListSlice,
    CourseSlice,
    CalculatorSlice,
    CurrencyInfo,
});

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
