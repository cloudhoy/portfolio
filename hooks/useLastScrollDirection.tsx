import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";

/** Hook that returns the last window scroll direction */
const useLastScrollDirection = (): [x: "left" | "right", y: "down" | "up"] => {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const [lastScrollXDirection, setLastScrollXDirection] = useState<
    "left" | "right"
  >("left");
  const [lastScrollYDirection, setLastScrollYDirection] = useState<
    "down" | "up"
  >("up");
  const lastScrollPositionRef = useRef({ x, y });

  useEffect(() => {
    setLastScrollXDirection(
      (x ?? 0) - (lastScrollPositionRef.current.x ?? 0) > 0 ? "right" : "left"
    );
    setLastScrollYDirection(
      (y ?? 0) - (lastScrollPositionRef.current.y ?? 0) > 0 ? "down" : "up"
    );
    lastScrollPositionRef.current = { x, y };
  }, [x, y]);

  return [lastScrollXDirection, lastScrollYDirection];
};

export default useLastScrollDirection;
