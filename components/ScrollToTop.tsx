"use client";

import { a, useSpring } from "@react-spring/web";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { ChevronUp, Minus } from "react-feather";

const ScrollToTop = () => {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    translateY: 0,
  }));

  useEffect(() => {
    if (y && y > 400) api.start({ opacity: 1, translateY: 1 });
    else api.start({ opacity: 0, translateY: 0 });
  }, [api, y]);

  return (
    <a.div
      className="fixed bottom-4 right-1 md:right-4"
      style={{
        opacity: styles.opacity,
        translateY: styles.translateY.to((val) => `-${val}em`),
      }}
    >
      <button
        type="button"
        className="btn btn-sm btn-square btn-ghost btn-outline grid place-items-center"
        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="col-start-1 row-start-1 mt-1" />
        <Minus className="col-start-1 row-start-1 -mt-2" />
      </button>
    </a.div>
  );
};

export default ScrollToTop;
