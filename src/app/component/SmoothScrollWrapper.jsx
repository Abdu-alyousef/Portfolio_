"use client"
import { useState, useEffect } from 'react';

const SmoothScrollWrapper = ({ children }) => {
  const [scrollToRef, setScrollToRef] = useState(null);

  useEffect(() => {
    if (scrollToRef) {
      scrollToRef.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToRef]);

  return <div>{children}</div>;
};

export default SmoothScrollWrapper;