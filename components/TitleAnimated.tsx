"use client";

import { PropsWithChildren, use, useEffect, useState } from "react";
import { a, to, useSpring } from "@react-spring/web";

export type TitleAnimatedProps = PropsWithChildren & {};

const TitleAnimated = ({ children }: TitleAnimatedProps) => {
  const [clicked, setClicked] = useState(false);
  const [props, api] = useSpring(() => ({
    x: 0,
    scale: 0,
    config: { mass: 10, tension: 550, friction: 70 },
  }));

  return (
    <div className="w-full grid place-items-center overflow-hidden">
      <a.div
        className={`cursor-pointer inline-block`}
        onClick={() => {
          setClicked((state) => !state);
          // react spring api start animating after state is updated,
          // so we check if !clicked
          api.start({ x: !clicked ? 1 : 0 });
        }}
        onMouseEnter={() => {
          api.start({ scale: 1 });
        }}
        onMouseLeave={() => {
          api.start({ scale: 0 });
        }}
        style={{
          textShadow: props.x
            .to([0, 1], [0, 0.2])
            .to((val) => `-${val}em 0 red, ${val}em 0 cyan`),
          letterSpacing: props.x.to([0, 1], [0, 0.5]).to((val) => `${val}em`),
          scale: props.scale.to([0, 1], [1, 1.05]),
        }}
      >
        {children}
      </a.div>
    </div>
  );
};

export default TitleAnimated;
