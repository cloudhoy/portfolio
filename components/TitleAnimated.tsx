"use client";

import { PropsWithChildren, useState } from "react";
import { a, to, useSpring } from "@react-spring/web";

export type TitleAnimatedProps = PropsWithChildren & {};

const TitleAnimated = ({ children }: TitleAnimatedProps) => {
  const [clicked, setClicked] = useState(false);
  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    from: { x: 0, y: 0 },
    config: { mass: 10, tension: 550, friction: 70 },
  }));
  return (
    <div
      className="w-full h-60 grid place-items-center overflow-hidden"
      onMouseMove={({ clientX, clientY }) =>
        set({
          x: clientX - window.innerWidth / 2,
          y: clientY - window.innerHeight / 2,
        })
      }
      onMouseLeave={() => set({ x: 0, y: 0 })}
    >
      <a.div
        className="cursor-pointer inline-block"
        onClick={() => {
          set({ x: 0, y: 0 });
          setClicked((state) => !state);
        }}
        style={{
          transform: to(
            [props.x, props.y],
            (x, y) => `translate3d(${x / 10}px, ${y / 5}px,0)`
          ),
          textShadow: to(
            [props.x, props.y],
            (x, y) =>
              `${-x / 30}px ${-y / 20}px red,  ${x / 30}px ${y / 20}px cyan`
          ),
        }}
      >
        {children}
      </a.div>
    </div>
  );
};

export default TitleAnimated;
