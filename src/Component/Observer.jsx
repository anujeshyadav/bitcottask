import React, { useEffect, useRef, useState } from "react";

const Observer = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleItems((prevItems) => [...new Set([...prevItems, index])]);
          } else {
            setVisibleItems((prevItems) =>
              prevItems.filter((item) => item !== index)
            );
          }
        });
      },
      {
        root: null, // use the viewport
        rootMargin: "0px",
        threshold: 0.5, // 50% of the element should be visible
      }
    );

    // Observe each item
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Cleanup on unmount
    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <ul
      className="scroll-wrap"
      style={{ height: "100vh", overflowY: "scroll" }}>
      {[0, 1, 2, 3].map((index) => (
        <li
          key={index}
          data-index={index}
          ref={(el) => (itemsRef.current[index] = el)}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
          }}>
          <div style={{ textAlign: "center" }}>
            <h2>Item {index}</h2>
            <p>
              {visibleItems.includes(String(index)) ? "In View" : "Not in View"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Observer;
