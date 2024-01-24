"use client";

import { animated, useInView } from "@react-spring/web";
import { PropsWithChildren } from "react";

export type FadeInProps = PropsWithChildren & {
    className?: string;
};

const FadeIn = ({ children, className }: FadeInProps) => {
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
        rootMargin: '-40% 0%',
        once: true,
    }
  );

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
