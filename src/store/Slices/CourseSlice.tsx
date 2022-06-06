import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

interface IinitialState {
    isLoading: boolean;
    error: string | null | unknown;
    course: number;
}

interface getProps {
    iHave: string | null;
    iWillGet: string | null;
    date: string;
}

export const getCourse = createAsyncThunk<number, getProps, { rejectValue?: string }>(
    'course/getCourse',
    async ({ iHave, iWillGet, date }, { rejectWithValue }) => {
        if (iHave && iWillGet) {
            try {
                const responce = await fetch(
                    `https://minfin.com.ua/api/coin/day/${iHave}/${iWillGet}/${date}`,
                    {
                        method: 'GET',
                    },
                );
                const { data, error } = await responce.json();
                if (error) {
                    Alert.alert('', 'Sorry, conversion to this currency is not available yet');
                    return null;
                }

                return data[0].course;
            } catch (e) {
                return rejectWithValue(e);
            }
        }
    },
);

const initialState: IinitialState = {
    isLoading: false,
    error: null,
    course: 0,
};

const CourseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourse.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCourse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.course = action.payload;
            })
            .addCase(getCourse.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default CourseSlice.reducer;
