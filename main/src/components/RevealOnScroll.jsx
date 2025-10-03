import { useRef, useEffect } from 'react';

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div ref={ref} className="reveal-on-scroll">
      {children}
    </div>
  );
};
