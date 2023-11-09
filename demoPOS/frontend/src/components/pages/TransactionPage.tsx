import { getTransactions, shopSelector } from "@/store/slices/shopSlice";
import { useAppDispatch } from "@/store/store";
import { imageUrl } from "@/utils/constants";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";

const Transaction = () => {
  const dispatch = useAppDispatch();
  const shopReducer = useSelector(shopSelector);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, shopReducer]);

  return (
    <Paper className="p-8">
      <ul>
        {shopReducer.transactionAllResult.map((e) => (
          <li key={e.transaction_id}>
            {e.transaction_id},{e.total},{e.buyer_id}
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default Transaction;
