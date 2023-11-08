// import { getProducts, stockSelector } from "@/store/slices/stockSlice";
// import { useAppDispatch } from "@/store/store";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// type Props = {};

// export default function StockPage({}: Props) {
//   const stockReducer = useSelector(stockSelector);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     // onCreated
//     console.log("Stock was created");
//     dispatch(getProducts());

//     return () => {
//       // onDestroy
//       console.log("Stock was destoryed");
//     };
//   }, [dispatch]);

//   return (
//     <div>
//       StockPage
//       <ul>
//         {stockReducer.stockAllResult.map((e) => (
//           <li key={e._id}>{e.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { stockSelector, getProducts } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
];

export default function DataTable() {
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // onCreated
    console.log("Stock was created");
    dispatch(getProducts());

    return () => {
      // onDestroy
      console.log("Stock was destoryed");
    };
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={stockRe}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
