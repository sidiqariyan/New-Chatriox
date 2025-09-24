import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1500, formatter?: (n: number) => string) {
  const [value, setValue] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setValue(current);
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  const display = formatter ? formatter(value) : value.toLocaleString();
  return display;
}
