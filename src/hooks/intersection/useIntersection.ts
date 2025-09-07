import { useEffect, useRef, useState } from "react";

interface IUseIntersectionProps {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export default function<T extends HTMLElement> ({
  threshold = 0,
  root = null,
  rootMargin = "0px",
  triggerOnce = false,
}: IUseIntersectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;

        if (triggerOnce && hasTriggered.current) return;

        setIsIntersecting(isCurrentlyIntersecting);

        if (isCurrentlyIntersecting && triggerOnce) {
          hasTriggered.current = true;
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { isIntersecting, ref };
}
