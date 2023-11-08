import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function StockPage({}: Props) {
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div>StockPage</div>;
}
