import React from "react";
import { useMatch } from "react-router-dom";

type Props = {};

export default function StockEditPage({}: Props) {
  const match = useMatch("/stock/edit/:id");

  return <div>StockEditPage {match?.params.id ?? "unknown"}</div>;
}
