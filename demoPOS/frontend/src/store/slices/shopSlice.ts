import { Product } from "@/types/product.type";
import { TransactionResponse } from "@/types/transaction.type";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { httpClient } from "@/utils/HttpClient";

const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const index = state.mOrderLines.findIndex((item) => {
        return item._id === product._id;
      });

      if (index === -1) {
        state.mOrderLines.unshift({ ...product, qty: 1 });
      } else {
        state.mOrderLines[index].qty!++;
      }
      updateOrder(state, state.mOrderLines);
    },
    removeOrder: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const orderLines = state.mOrderLines;
      const foundIndex = orderLines.findIndex(
        (p) => p.product_id == product.product_id
      );

      orderLines.map((item: any) => {
        if (item.product_id === product.product_id) {
          item.qty = 1;
        }
        return item;
      });
      orderLines.splice(foundIndex, 1);
      updateOrder(state, orderLines);
    },
    togglePayment: (state, _action: PayloadAction<void>) => {
      state.mIsPaymentMade = !state.mIsPaymentMade;
      state.mGiven = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactionAllResult = action.payload;
    });
    builder.addCase(submitPayment.fulfilled, (state, _action) => {
      state.mIsPaymentMade = false;
      state.mGiven = 0;
      state.mOrderLines = [];
    });
  },
});

export const { addOrder, removeOrder, togglePayment } = shopSlice.actions;
export const shopSelector = (store: RootState): ShopState => store.shopReducer;

export default shopSlice.reducer;
