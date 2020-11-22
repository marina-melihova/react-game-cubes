import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameReducer, gameSlice } from '../redux/game';

const stateCube = {
  EMPTY: 0,
  CLICKABLE: 1,
};

export const Cube = ({ cell }) => {
  const dispatch = useDispatch();
  const start = useSelector(state => gameSelectors.getGamePhase(state));
  const indexes = useSelector(state => gameSelectors.getCubes(state));
  const [state, setState] = useState(stateCube.EMPTY);
  const [backgroundColor, setBgColor] = useState('transparent');

  useEffect(() => {
    if (state === stateCube.CLICKABLE) {
      setBgColor(getRandomColor());
    } else {
      setBgColor('transparent');
    }
  }, [state]);

  useEffect(() => {
    if (start && indexes.includes(cell)) {
      setState(stateCube.CLICKABLE);
    } else {
      setState(stateCube.EMPTY);
    }
  }, [start, indexes]);

  const handleClick = e => {
    const cubeIndex = Number(e.target.dataset.index);
    if (!indexes.includes(cubeIndex)) {
      return;
    }
    dispatch(gameSlice.cubes.actions.removeCube(cubeIndex));
    dispatch(gameSlice.points.actions.addPoint());
    const count = Math.floor(Math.random() * 3);
    dispatch(gameSlice.cubes.actions.initCubes(count));
  };

  return (
    <div
      className="cube"
      style={{ backgroundColor }}
      data-index={cell}
      onClick={handleClick}
    ></div>
  );
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
