import React, { useEffect } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval: number) {
  const handleCopy = (text: string) => {};
  return [true, handleCopy];
}
