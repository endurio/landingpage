import { useState, useCallback, useEffect } from "react";

// function checkInnerWidth() {
//   return typeof window !== undefined && window.innerWidth >= 768;
// }

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(true);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width:${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

export default useMediaQuery;
