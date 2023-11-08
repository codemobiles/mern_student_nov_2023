import { Product } from "@/types/product.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface StockState {
  stockAllResult: Product[];
  stockOneResult: Product | null;
}

const initialState: StockState = {
  stockAllResult: [],
  stockOneResult: null,
};

export const getProducts = createAsyncThunk(
  "stock/getProducts",
  async (keyword: string) => {
    if (keyword) {
      const result = await httpClient.get<Product[]>(
        `${server.PRODUCT_URL}/name/${keyword}`
      );
      return result.data;
    } else {
      const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
      return result.data;
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.stockAllResult = action.payload;
    });
  },
});

export const stockSelector = (state: RootState) => state.stockReducer;
export default stockSlice.reducer;
