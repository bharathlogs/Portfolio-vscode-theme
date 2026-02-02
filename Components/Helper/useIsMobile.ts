import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsMobile() {
  const [mounted, setMounted] = useState(false);
  const mediaQuery = useMediaQuery({ query: "(max-width: 943px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? mediaQuery : false;
}
