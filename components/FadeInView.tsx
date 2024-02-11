"use client";

import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import React from "react";
import { PropsWithChildren, useEffect } from "react";

export type FadeInViewProps = PropsWithChildren & {
  className?: string;
  delay?: number;
  rootMargin?: string;
  once?: boolean;
};

const FadeInView = ({
  children,
  className,
  delay = 0,
  rootMargin = "-20% 0%",
  once = true,
}: FadeInViewProps) => {
  const elements = React.Children.toArray(children);
  const [ref, inView] = useInView({
    rootMargin: rootMargin,
    once: once,
  });

  const [trails, api] = useTrail(elements.length, () => ({
    config: { tension: 120, friction: 14, clamp: true },
    opacity: 0,
    y: 16,
  }));

  useEffect(() => {
    if (inView)
      api.start((index) => ({ opacity: 1, y: 0, delay: (index + 1) * delay }));
  }, [api, delay, inView]);

  return (
    <div ref={ref} className={className}>
      {elements.map((e, i) => (
        <animated.div key={i} style={trails[i]}>
          {e}
        </animated.div>
      ))}
    </div>
  );
};

export default FadeInView;
