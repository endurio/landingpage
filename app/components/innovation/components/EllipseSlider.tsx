import React from "react";

const EllipseSlider = (props) => {
  const items = [0, 1, 2, 3, 4];

  return (
    <>
      <div className="flex gap-4">
        {items.map((i, idx) => {
          return (
            <div key={idx} className="circle">
              <div
                className="mover"
                style={{
                  transform: `translateX(${(props.currentPage - i) * 40}px)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EllipseSlider;
