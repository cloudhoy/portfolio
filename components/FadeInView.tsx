"use client";

import { animated, useInView } from "@react-spring/web";
import { PropsWithChildren } from "react";

export type FadeInViewProps = PropsWithChildren & {
    className?: string;
};

const FadeInView = ({ children, className }: FadeInViewProps) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
        rootMargin: '-30% 0%',
        once: true,
    }
  );

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  );
};

export default FadeInView;
