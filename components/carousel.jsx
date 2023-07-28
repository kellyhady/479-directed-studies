import { useEffect, useState, Children, cloneElement } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";

import ".//Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    /*carousel-item css class*/
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
      // newIndex = Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  // const changeChild = (e) => {
  //   if (e.key === "ArrowLeft") {
  //     newIndex = 0;
  //   } else if (e.key === "ArrowRight") {
  //     newIndex = 0;
  //     // newIndex = Children.count(children) - 1;
  //   }
  //   setActiveIndex(newIndex);
  // };

  // Keypress event handler
  // const changeChild = useCallback(
  //   (e) => {
  //     if (e.key === "ArrowLeft") {
  //       // If supposed previous child is < 0 set it to last child
  //       setActiveChild((a) => (a - 1 < 0 ? children.length - 1 : a - 1));
  //     } else if (e.key === "ArrowRight") {
  //       // If supposed next child is > length -1 set it to first child
  //       setActiveChild((a) => (a + 1 > children.length - 1 ? 0 : a + 1));
  //     }
  //   },
  //   [children]
  // );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // const greet = (name) => {
  //   alert(`hello, ${name}`);
  // };

  return (
    <div
      {...handlers}
      className="carousel" /*carousel css class*/
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner" /*inner css class*/
        style={{
          transform: `translateX(-${(activeIndex * 100) / 4}%)`,
        }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100vw" });
        })}
      </div>

      {/* Indicators */}
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
