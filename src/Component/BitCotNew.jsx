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
      // top: "328px",
      // width: 462,
      // left: "100%",
    },
    lineDote: {
      // top: "-11px",
      // width: 2 * 10,
      // left: "-32px",
    },
    watchLine: {
      // top: "-8px",
      // width: 0,
      // left: "-29px",
    },
    watchPara: {
      // opacity: 0,
      // padding: "0px 0px 0px 142px",
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
      if (scrolled < 14) {
        window.addEventListener("DOMContentLoaded", (event) => {
          document.getElementById("watch-para").innerHTML = `
    <p>
      TOKKTM is designed for easyinteractions with a second Multi-Function Button for added convenience.
    </p>
  `;
        });
        const percentage = (scrolled / 14) * 100;

        data.watchData.top = "328px";
        data.watchData.width = 462;
        data.watchData.left = "100%";

        data.lineDote.top = "-11px";
        data.lineDote.left = "-32px";

        data.watchLine.top = "-8px";
        data.watchLine.width = percentage * 4;
        data.watchLine.left = "-29px";

        data.watchPara.opacity = (percentage * 2) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
        // Handle boundary < 14
      } else if (scrolled >= 14 && scrolled < 28) {
        window.addEventListener("DOMContentLoaded", (event) => {
          document.getElementById("watch-para").innerHTML = `
    <p>
      TOKK AI makes your voice clear and easy to hear with powerful speakers and smart microphones that block out noise.
    </p>
  `;
        });
        const percentage = ((scrolled - 14) / 14) * 100;
        data.watchData.top = "172px";
        data.watchData.width = 462;
        data.watchData.left = "100%";
        data.lineDote.top = "-13px";
        data.lineDote.left = "-56px";

        data.watchLine.top = "-8px";
        data.watchLine.width = percentage * 4;
        data.watchLine.left = "-51px";

        data.watchPara.opacity = (percentage * 2) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
      } else if (scrolled >= 28 && scrolled < 42) {
        window.addEventListener("DOMContentLoaded", (event) => {
          document.getElementById("watch-para").innerHTML = `
    <p>
      TOKKTM is designed for easyinteractions with a second Multi-Function Button for added convenience.
    </p>
  `;
        });
        const percentage = ((scrolled - 28) / 14) * 100;
        data.watchData.top = "352px";
        data.watchData.width = 462;
        data.watchData.right = "33px";

        data.lineDote.top = "-25px";
        data.lineDote.right = "139px";

        data.watchLine.top = "-23px";
        data.watchLine.width = percentage * 4;
        data.watchLine.right = "148px";

        data.watchPara.opacity = (percentage * 2) / 100;
        data.watchPara.padding = "0px 0px 0px 142px";
        // Handle 28 <= boundary < 42
      } else if (scrolled >= 42 && scrolled < 56) {
        window.addEventListener("DOMContentLoaded", (event) => {
          document.getElementById("watch-para").innerHTML = `
    <p>
      
TOKK <sup>TM</sup> is designed for easyinteractions with a second Multi-Function Button for added convenience.
    </p>
  `;
        });
        const percentage = ((scrolled - 42) / 14) * 100;
        data.watchData.top = "228px";
        data.watchData.width = 462;
        data.watchData.left = "100%";

        data.lineDote.top = "-12px";
        data.lineDote.left = "-41px";

        data.watchLine.top = "-6px";
        data.watchLine.width = percentage * 4;
        data.watchLine.left = "-37px";

        data.watchPara.opacity = (percentage * 2) / 100;
        data.watchPara.padding = "0px 0px 0px 143px";
      }
    } else {
      if (scrolled >= 56) {
        let boundary = scrolled / 4;
        if (scrolled >= 56 && scrolled < 70) {
          const percentage = ((boundary - 56) / 14) * 100;
          // Handle segment 5 (56-70)
        } else if (scrolled >= 70 && scrolled < 84) {
          const percentage = ((boundary - 70) / 14) * 100;
          // Handle segment 6 (70-84)
        } else if (scrolled >= 84 && scrolled < 98) {
          const percentage = ((boundary - 84) / 14) * 100;
          // Handle segment 7 (84-98)
        } else if (scrolled >= 98) {
          const percentage = ((boundary - 98) / 14) * 100;
          // Handle segment 8 (98+)
        }
      }
    }
    // console.log(data);
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
            // console.log(entry);
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
