import { useRef, useState, useEffect } from "react";

interface optionInterface {
  root: null | Element;
  rootMargin: string;
  threshold: number | number[];
}

const useElementIntersection = (options: optionInterface) => {
  const elRef = useRef(null);
  const [isVisible, setVisibility] = useState(false);
  const [ratio, setRatio] = useState(1);

  const observerCallback = (e: IntersectionObserverEntry[], o: any): void => {
    const [i] = e;
    setVisibility(i.isIntersecting);
    setRatio(i.intersectionRatio);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    const el = elRef.current as unknown as Element;
    if (el) {
      observer.observe(el);
    }
    return () => {
      if (el) observer.unobserve(el);
    };
  });
  return [elRef, isVisible, ratio];
};

export default useElementIntersection;
