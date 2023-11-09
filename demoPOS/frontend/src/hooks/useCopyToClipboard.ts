import React, { useEffect } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval: number): any {
  const [isCopied, setCopied] = React.useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  const handleCopy = React.useCallback((text: string) => {
    copy(text);
    setCopied(true);
  }, []);
  return [isCopied, handleCopy];
}
