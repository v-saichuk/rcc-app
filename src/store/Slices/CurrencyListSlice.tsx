import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ICyrrencyList {
    code: string | any;
}

interface ICurrencyListSlice {
    isLoading: boolean;
    error: string | null | unknown;
    cyrrencyList: ICyrrencyList[];
    defaultValue: {
        iHave: string;
        iWillGet: string;
    };
}

export const getCurrencyList = createAsyncThunk<
    ICyrrencyList[],
    undefined,
    { rejectValue?: string }
>('cyrrency/getCurrencyList', async (_, { rejectWithValue }) => {
    try {
        const responce = await fetch(
            'https://minfin.com.ua/api/currency/list/?locale=uk&type=money&start=0&cpp=113',
            { method: 'GET' },
        );
        const { list } = await responce.json();
        return list;
    } catch (e) {
        return rejectWithValue(e);
    }
});

const initialState: ICurrencyListSlice = {
    isLoading: false,
    error: null,
    defaultValue: {
        iHave: 'USD',
        iWillGet: 'UAH',
    },
    cyrrencyList: [],
};

const CurrencyListSlice = createSlice({
    name: 'currencyList',
    initialState,
    reducers: {
        onIHave: (state, action) => {
            state.defaultValue.iHave = action.payload;
        },
        onIwillGet: (state, action) => {
            state.defaultValue.iWillGet = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrencyList.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCurrencyList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cyrrencyList = action.payload
                    .sort((a: any, b: any) => (a.group > b.group ? -1 : 1))
                    .map((el) => el.code);
            })
            .addCase(getCurrencyList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default CurrencyListSlice.reducer;
export const { onIHave, onIwillGet } = CurrencyListSlice.actions;
