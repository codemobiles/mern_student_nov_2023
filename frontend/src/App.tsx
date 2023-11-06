import { Button } from "@mui/material";
import React from "react";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      App
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
