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
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell({ value }) {
        return (
          <img
            src={"http://localhost:8081/images/" + value}
            className="w-[50px]"
          />
        );
      },
    },

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
