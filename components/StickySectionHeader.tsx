"use client";

import { PropsWithChildren, RefObject, useEffect, useState } from "react";
import { a, useSpring } from "@react-spring/web";
import useLastScrollDirection from "@/hooks/useLastScrollDirection";
import useDetectSticky from "@/hooks/useDetectSticky";

export type StickySectionHeaderProps = PropsWithChildren & {
  className?: string;
};

const StickySectionHeader = ({ children }: StickySectionHeaderProps) => {
  const [isStickyAndNavVisible, setIsStickyAndNavVisible] = useState(false);
  const [lastXDir, lastYDir] = useLastScrollDirection();
  const [isSticky, ref, setIsSticky] = useDetectSticky<HTMLDivElement>();
  const [props, api] = useSpring(
    () => ({
      marginX: isSticky ? 1 : 0,
    }),
    []
  );

  useEffect(() => {
    const stuckAndNavVisible = lastYDir === "up" && (isSticky as boolean);
    setIsStickyAndNavVisible(stuckAndNavVisible);
    api.start({
      marginX: stuckAndNavVisible ? 1 : 0,
    });
  }, [api, lastYDir, isSticky]);

  return (
    <a.div
      ref={ref as RefObject<HTMLDivElement>}
      className={`sticky md:relative top-[-1px] pt-[calc(1em+1px)] pb-4 md:!mx-0 ${
        isStickyAndNavVisible
          ? "z-40 backdrop-blur-none"
          : "backdrop-blur-sm md:backdrop-blur-none"
      }`}
      style={{
        marginLeft: props.marginX.to([0, 1], [0, 2]).to((val) => `${val}rem`),
        marginRight: props.marginX.to([0, 1], [0, 2]).to((val) => `${val}rem`),
      }}
    >
      {children}
    </a.div>
  );
};

export default StickySectionHeader;
