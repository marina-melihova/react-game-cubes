import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Cube, stateCube } from './Cube';

const Playground = () => {
  const renderRow = (row, i) => {
    const columns = row.map((cellIndex, j) => {
      return <Cube key={uuidv4()} cell={cellIndex} />;
    });

    return (
      <div key={i} className="area-row">
        {columns}
      </div>
    );
  };

  const rows = [];
  const row = [];
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(j => {
      row[j] = i * 10 + j;
    });
    rows.push(renderRow(row, i));
  });
  return <div className="area">{rows}</div>;
};

export default Playground;
