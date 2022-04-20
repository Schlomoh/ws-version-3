import React, { useRef, useState, useEffect } from "react";

interface optionInterface {
  root: null | Element;
  rootMargin: string;
  threshold: number | number[];
}

export function createThresholdArr(): number[] {
  // array = [0.00, 0.01, ..., 0.99, 1.00]
  return Array.from(Array(100).keys(), (i) => i / 100);
}

/**
 * custom hook for the intersection observer
 * @param options - intersection oberver options
 * @returns [elemetRef, isVisible, ratio];
 */
function useElementIntersection(
  options: optionInterface
) {
  const elRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisibility] = useState(false);
  const [ratio, setRatio] = useState(1);

  // callback for when intersection happens
  const observerCallback = (e: IntersectionObserverEntry[], o: any): void => {
    const [i] = e;
    setVisibility(i.isIntersecting);
    setRatio(i.intersectionRatio);
  };

  // create an observer event listener if an element is given which is to observe
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    const el = elRef.current;
    if (el) {
      observer.observe(el);
    }
    // destructor
    return () => {
      if (el) observer.unobserve(el);
    };
  });
  return {ref: elRef, isVisible: isVisible,ratio: ratio};
}

export default useElementIntersection;
