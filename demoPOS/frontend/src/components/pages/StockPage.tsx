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

export default function StockPage() {
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    { field: "product_id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 330 },
    { field: "stock", headerName: "Stock", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
  ];

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
        getRowId={(row) => row.product_id}
        rows={stockReducer.stockAllResult}
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
