import { useEffect, useRef, useState } from "react";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, {
        rootMargin: '-45% 0px -55%'
    });

    const sections = document.querySelectorAll<HTMLDivElement>("section[id]");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return activeSection;
};

export default useActiveSection;