import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

export default function StockCard(props: Props) {
  return (
    <Stack direction="row">
      <Stack direction="column">
        <Typography variant="body1">{props.title}</Typography>
        <Typography variant="body1">{props.subtitle}</Typography>
      </Stack>
      <Box color={props.color}>
        <props.icon />
      </Box>
    </Stack>
  );
}
