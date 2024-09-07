import React, { useRef } from "react";
import { useEffect, useState } from "react";
import "./Bitcot.css";
import first from "./assets/first.webp";
import second from "./assets/second.webp";

function BitCotNew() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [Index, setIndex] = useState(null);
  const [style, setStyle] = useState({
    watchData: {
      top: "328px",
      width: 462,
      left: "100%",
    },
    lineDote: {
      top: "-11px",
      // width: 2 * 10,
      left: "-32px",
    },
    watchLine: {
      top: "-8px",
      width: 0,
      left: "-29px",
    },
    watchPara: {
      opacity: 0,
      padding: "0px 0px 0px 142px",
    },
  });

  const [visibleItems, setVisibleItems] = useState([]);
  const itemsRef = useRef([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScrollableHeight = documentHeight - windowHeight;
    const scrolled = (scrollPosition / totalScrollableHeight) * 100;

    setScrollPercentage(scrolled);
    let data = JSON.parse(JSON.stringify(style));
    if (scrolled < 56) {
      let boundary = scrolled / 4;
      console.log(boundary);
      if (boundary < 14) {
        data.watchData.top = "328px";
        data.watchData.width = 462;
        data.watchData.left = "100%";

        data.lineDote.top = "-11px";
        data.lineDote.left = "-32px";

        data.watchLine.top = "-8px";
        data.watchLine.width = scrolled * 10;
        data.watchLine.left = "-29px";

        data.watchPara.opacity = (scrolled * 10) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
        // Handle boundary < 14
      } else if (boundary >= 14 && boundary < 28) {
        debugger;
        data.watchData.top = "328px";
        data.watchData.width = 462;
        data.watchData.left = "100%";
        data.lineDote.top = "-11px";
        data.lineDote.left = "-32px";

        data.watchLine.top = "-8px";
        data.watchLine.width = scrolled * 20;
        data.watchLine.left = "-29px";

        data.watchPara.opacity = (scrolled * 10) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
        // Handle 14 <= boundary < 28
      } else if (boundary >= 28 && boundary < 42) {
        data.watchData.top = "192px";
        data.watchData.width = 462;
        data.watchData.left = "100%";

        data.lineDote.top = "-29px";
        data.lineDote.left = "-51px";

        data.watchLine.top = "-27px";
        data.watchLine.width = scrolled * 40;
        data.watchLine.left = "-46px";

        data.watchPara.opacity = (scrolled * 10) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
        // Handle 28 <= boundary < 42
      } else if (boundary >= 42 && boundary < 56) {
        data.watchData.top = "187px";
        data.watchData.width = 462;
        data.watchData.left = "-40%";

        data.lineDote.top = "128px";
        data.lineDote.left = "179px";

        data.watchLine.top = "131px";
        data.watchLine.width = scrolled * 80;
        data.watchLine.left = "37px";

        data.watchPara.opacity = (scrolled * 10) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
      }
    } else {
      if (scrolled >= 56) {
        let boundary = scrolled / 4;

        if (boundary >= 56 && boundary < 70) {
          // Handle 56 <= boundary < 70
        } else if (boundary >= 70 && boundary < 84) {
          // Handle 70 <= boundary < 84
        } else if (boundary >= 84 && boundary < 98) {
          // Handle 84 <= boundary < 98
        } else if (boundary >= 98) {
          // Handle boundary >= 98
        }
      }
    }
    console.log(data);
    setStyle(data);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          setIndex(index);
          // console.log(index);
          if (entry.isIntersecting) {
            // debugger;
            console.log(entry);
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
            {/* <div
              className="watch-data"
              style={{ top: "328px", width: 462, left: "100%" }}>
              <div
                className="line-dote"
                style={{ top: "-11px", left: "-32px" }}
              />
              <div
                className="watch-line"
                style={{
                  width: `${scrollPercentage * 10}%`,
                  top: "-8px",
                  left: "-29px",
                }}
              />
              <div
                className="watch-para"
                style={{
                  opacity: `${(scrollPercentage * 10) / 100}`,
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
            </div> */}
            <div className="watch-data" style={style.watchData}>
              <div className="line-dote" style={style.lineDote} />
              <div className="watch-line" style={style.watchLine} />
              <div className="watch-para" style={style.watchPara}>
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
        {/* <ul
          className="scroll-wrap"
          style={{ height: "100vh", overflowY: "scroll" }}>
          {[0, 1, 2, 3].map((index) => (
            <li
              key={index}
              data-index={index}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{
                height: "100vh", // each item takes the full height of the viewport
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}>
              <div style={{ textAlign: "center" }}>
                <h2>Item {index}</h2>
                <p>
                  {visibleItems.includes(String(index))
                    ? "In View"
                    : "Not in View"}
                </p>
              </div>
            </li>
          ))}
        </ul> */}
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
