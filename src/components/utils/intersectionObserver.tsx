import { useRef, useState, useEffect } from "react";

interface optionInterface {
  root: null | Element;
  rootMargin: string;
  threshold: number | number[];
}

/**
 * custom hook for the intersection observer
 * @param options - intersection oberver options
 * @returns [elemetRef, isVisible, ratio];
 */
const useElementIntersection = (options: optionInterface) => {
  const elRef = useRef(null);
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
    const el = elRef.current as unknown as Element;
    if (el) {
      observer.observe(el);
    }
    // destructor
    return () => {
      if (el) observer.unobserve(el);
    };
  });
  return [elRef, isVisible, ratio];
};

export default useElementIntersection;
