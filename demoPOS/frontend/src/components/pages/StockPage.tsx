import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function StockPage({}: Props) {
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // onCreated
    console.log("Stock was created");
    dispatch(getProducts());

    return () => {
      // onDestroy
      console.log("Stock was destoryed");
    };
  }, [dispatch]);

  return (
    <div>
      StockPage
      <ul>
        {stockReducer.stockAllResult.map((e) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
