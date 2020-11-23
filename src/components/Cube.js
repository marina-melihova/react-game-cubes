import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameReducer, gameSlice } from '../redux/game';

const Cube = ({ cell }) => {
  const dispatch = useDispatch();
  const start = useSelector(state => gameSelectors.getGamePhase(state));
  const indexes = useSelector(state => gameSelectors.getCubes(state));
  const [state, setState] = useState(stateCube.EMPTY);
  const [backgroundColor, setBgColor] = useState('transparent');

  useEffect(() => {
    if (state === stateCube.CLICKABLE) {
      setBgColor(colors[Math.floor(Math.random() * 15)]);
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

export default Cube;

const stateCube = {
  EMPTY: 0,
  CLICKABLE: 1,
};

const colors = [
  '#FFCC00',
  '#663300',
  '#CC3300',
  '#FF0000',
  '#CC6666',
  '#990033',
  '#9933CC',
  '#660099',
  '#0000FF',
  '#006666',
  '#33CCFF',
  '#FF9900',
  '#00FFFF',
  '#00CC00',
  '#99FF00',
];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
