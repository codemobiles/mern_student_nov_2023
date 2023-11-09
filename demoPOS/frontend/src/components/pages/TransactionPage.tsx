// import { getTransactions, shopSelector } from "@/store/slices/shopSlice";
// import { useAppDispatch } from "@/store/store";
// import { imageUrl } from "@/utils/constants";
// import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
// import {
//   DataGrid,
//   GridColDef,
//   GridRenderCellParams,
//   GridRowId,
// } from "@mui/x-data-grid";
// import dayjs from "dayjs";
// import "dayjs/locale/th";
// import { useEffect, useState } from "react";
// import { NumericFormat } from "react-number-format";
// import { useSelector } from "react-redux";

// const Transaction = () => {
//   const dispatch = useAppDispatch();
//   const shopReducer = useSelector(shopSelector);

//   useEffect(() => {
//     dispatch(getTransactions());
//   }, [dispatch, shopReducer]);

//   return (
//     <Paper className="p-8">
//       <ul>
//         {shopReducer.transactionAllResult.map((e) => (
//           <li key={e.transaction_id}>
//             {e.transaction_id},{e.total},{e.buyer_id}
//           </li>
//         ))}
//       </ul>
//     </Paper>
//   );
// };

// export default Transaction;

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { shopSelector, getTransactions } from "@/store/slices/shopSlice";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "transaction_id", headerName: "ID", width: 70 },
  { field: "total", headerName: "Total", width: 130 },
  { field: "buyer_id", headerName: "Buyer", width: 130 },
];

export default function DataTable() {
  const dispatch = useAppDispatch();
  const shopReducer = useSelector(shopSelector);

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, shopReducer]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={shopReducer.transactionAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        getRowId={(row) => row.transaction_id}
      />
    </div>
  );
}
