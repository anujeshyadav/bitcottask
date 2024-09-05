import React from "react";
import { useEffect, useState } from "react";
import "./Bitcot.css";
import first from "./assets/first.webp";
import second from "./assets/second.webp";

function BitCotNew() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScrollableHeight = documentHeight - windowHeight;
    const scrolled = (scrollPosition / totalScrollableHeight) * 100;

    setScrollPercentage(scrolled);
    // console.log(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <section className="watch-effect">
        <div className="watch-content">
          <div className="watch-container">
            <img
              alt="warch-image"
              loading="lazy"
              width={269}
              height={482}
              decoding="async"
              data-nimg={1}
              className="watch-img w-16 md:w-32 lg:w-48"
              src={first}
              style={{ color: "transparent" }}
            />
            <div
              className="watch-data"
              style={{ top: "328px", width: 462, left: "100%" }}>
              <div
                className="line-dote"
                style={{ top: "324px", left: "239px" }}
              />
              <div
                className="watch-line"
                style={{
                  width: `${scrollPercentage}%`,
                  top: "328px",
                  left: "239px",
                }}
              />
              <div
                className="watch-para"
                style={{
                  opacity: `${scrollPercentage / 100}`,
                  padding: "0px 0px 0px 142px",
                }}>
                <p>
                  TOKK AI has a dedicated
                  <br />
                  button for effortless volume
                  <br />
                  control.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="scroll-wrap">
          <li data-index={0} />
          <li data-index={1} />
          <li data-index={2} />
          <li data-index={3} />
        </ul>
      </section>
      <section className="watch-effect watch-effect-flat">
        <div className="watch-content flat-watch">
          <div className="watch-container">
            <img
              alt="warch-image"
              loading="lazy"
              width={406}
              height={220}
              decoding="async"
              data-nimg={1}
              src={second}
              style={{ color: "transparent" }}
            />
            <div
              className="watch-data"
              style={{ left: 50, top: 170, width: 340 }}>
              <div
                className="line-dote"
                style={{ left: "-15px", top: "-17px" }}
              />
              <div
                className="watch-line"
                style={{
                  width: "3.19965%",
                  left: "-10px",
                  top: "-13px",
                  transform: "rotate(90deg)",
                  transformOrigin: "0px center",
                }}
              />
              <div
                className="watch-effect-flat-para"
                style={{ opacity: "0.0319965", padding: "180px 0px 0px" }}>
                <p>
                  TOKK AI is built for extended use
                  <br />
                  with USB-C quick charging,
                  <br />
                  optimizing low-power circuitry, and
                  <br />
                  up to 12 hours of continuous usage
                  <br />
                  or 80 hours of standby time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="scroll-wrap">
          <li data-index={0} />
          <li data-index={1} />
        </ul>
      </section>
    </div>
  );
}

export default BitCotNew;
