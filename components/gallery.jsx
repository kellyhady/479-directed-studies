import { useEffect, useState, Children, cloneElement } from "react";
import { useSwipeable } from "react-swipeable";

import ".//Gallery.css";

export const GalleryItem = ({ children, width }) => {
  return (
    /*carousel-item css class*/
    <div className="gallery-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Gallery = ({ children }) => {
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
      className="gallery" /*carousel css class*/
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner" /*inner css class*/
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%" });
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

export default Gallery;
