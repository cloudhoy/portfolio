import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * Detects when a (CSS) sticky element changes "sticky" state
 * @param ref Optional react ref. if not provided, a new one will be used instead.
 * @param observerSettings Observer's settings object
 */
const useDetectSticky = <T extends HTMLElement>(
  ref?: MutableRefObject<T | undefined>,
  observerSettings = { threshold: [1] }
) => {
  const [isSticky, setIsSticky] = useState(false);
  const newRef = useRef<T>();
  ref ||= newRef;

  useEffect(() => {
    const cachedRef = ref?.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.boundingClientRect.top < 0 && e.intersectionRatio < 1),
        observerSettings
      );

    if (cachedRef) observer.observe(cachedRef);

    return () => {
      if (cachedRef) observer.unobserve(cachedRef);
    };
  }, [ref, observerSettings]);

  return [isSticky, ref, setIsSticky];
};

export default useDetectSticky;
