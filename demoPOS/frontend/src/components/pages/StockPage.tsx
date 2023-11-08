import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { stockSelector, getProducts } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { NumericFormat } from "react-number-format";
import { Typography } from "@mui/material";

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
            alt="product image"
            src={"http://localhost:8081/images/" + value}
            className="w-[50px]"
          />
        );
      },
    },

    { field: "name", headerName: "Name", width: 330 },
    {
      field: "stock",
      headerName: "Stock",
      width: 130,
      renderCell({ value }) {
        return (
          <Typography variant="body1">
            <NumericFormat
              value={value}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={0}
              fixedDecimalScale={true}
            />
          </Typography>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      renderCell({ value }) {
        return (
          <Typography variant="body1">
            <NumericFormat
              value={value}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              suffix=" ฿"
            />
          </Typography>
        );
      },
    },
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
      />
    </div>
  );
}
