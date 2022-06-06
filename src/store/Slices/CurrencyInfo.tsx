import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCyrrencyInfo = createAsyncThunk<
    IinfoCourse,
    IProps,
    { rejectValue?: string | null | unknown }
>('currencyInfo/getCyrrencyInfo', async ({ iHave, iWillGet, date }, { rejectWithValue }) => {
    try {
        const responce = await fetch(
            `https://minfin.com.ua/api/currency/?locale=uk&val=1&cur1=${iHave}&cur2=${iWillGet}&cur1_type=money&cur2_type=money&date=${date}`,
            { method: 'GET' },
        );
        const { data } = await responce.json();
        return data[iHave];
    } catch (e) {
        return rejectWithValue(e);
    }
});

interface IProps {
    iHave: string;
    iWillGet: string;
    date: string;
}

interface IinfoCourse {
    buy: {
        nbu: {
            val: string;
        };
        visa: {
            val: string;
        };
        mastercard: {
            val: string;
        };
    };
    sell: {
        nbu: {
            val: string;
        };
        visa: {
            val: string;
        };
        mastercard: {
            val: string;
        };
    };
}

interface IinitialState {
    isLoading: boolean;
    error: null | string | unknown;
    infoCourse: IinfoCourse;
}

const initialState: IinitialState = {
    isLoading: false,
    error: null,
    infoCourse: {
        buy: {
            nbu: {
                val: '0.00',
            },
            visa: {
                val: '0.00',
            },
            mastercard: {
                val: '0.00',
            },
        },
        sell: {
            nbu: {
                val: '0.00',
            },
            visa: {
                val: '0.00',
            },
            mastercard: {
                val: '0.00',
            },
        },
    },
};

const CurrencyInfo = createSlice({
    name: 'currencyInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCyrrencyInfo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCyrrencyInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.infoCourse = action.payload;
            })
            .addCase(getCyrrencyInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default CurrencyInfo.reducer;
