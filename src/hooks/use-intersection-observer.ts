"use client";

import { useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      const revealElements = currentElement.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
      
      // Also observe the element itself if it has the reveal class
      if (currentElement.classList.contains("reveal")) {
        observer.observe(currentElement);
      }
    }

    return () => {
      if (currentElement) {
        const revealElements = currentElement.querySelectorAll(".reveal");
        revealElements.forEach((el) => observer.unobserve(el));
        if (currentElement.classList.contains("reveal")) {
          observer.unobserve(currentElement);
        }
      }
    };
  }, [options]);

  return elementRef;
}
