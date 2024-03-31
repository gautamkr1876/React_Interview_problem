import React, { useState } from "react";

const SelectableGrid = ({ row = 10, cols = 10 }) => {
  const [isMouseDown, setMouseDown] = useState(false);
  const [selectBoxes, setSelectBoxes] = useState([]);
  const handleMouseUp = () => {
    setMouseDown(false);
    setSelectBoxes([]);
  };
  const handleMouseDown = (boxNo) => {
    setMouseDown(true);
    setSelectBoxes([boxNo]);
  };
  const handleMouseEnter = (boxNo) => {
    if (isMouseDown) {
      const startBox = selectBoxes[0];
      const endBox = boxNo;

      const startRows = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;
      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRows, endRow);
      const maxRow = Math.max(startRows, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);
      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }
      setSelectBoxes(selected);
    }
  };
  return (
    <div
      className="grid"
      style={{ "--rows": row, "--cols": cols }}
      onMouseUp={() => handleMouseUp()}
    >
      {[...Array(row * cols).keys()].map((_, index) => {
        return (
          <div
            className={`box ${
              selectBoxes.includes(index + 1) ? "selected" : ""
            }`}
            key={index}
            onMouseDown={() => handleMouseDown(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
