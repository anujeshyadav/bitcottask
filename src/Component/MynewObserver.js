import React, { useEffect, useRef, useState } from "react";

function MynewObserver() {
  const boxRef = useRef([]); // Array of refs for each list item
  const [inViewIndex, setInViewIndex] = useState(null); // Track which item is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = boxRef.current.indexOf(entry.target); // Get index of the observed element
            console.log("In View:", index);
            console.log("In View:", entry);
            setInViewIndex(index); // Set the index of the currently visible item
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Start observing each list item
    boxRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    // Clean up the observer on unmount
    return () => {
      boxRef.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  return (
    <div className="container">
      <ul>
        {[1, 2, 3, 4].map((ele, i) => (
          <li
            key={ele}
            ref={(el) => (boxRef.current[i] = el)} // Assign refs to each list item
            style={{
              height: "100vh",
              backgroundColor: inViewIndex === i ? "lightgreen" : "lightgray",
            }}>
            Item {ele}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MynewObserver;
