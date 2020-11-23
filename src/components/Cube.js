import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameSlice } from '../redux/game';

const Cube = ({ cell }) => {
  const dispatch = useDispatch();
  const start = useSelector(state => gameSelectors.getGamePhase(state));
  const indexes = useSelector(state => gameSelectors.getCubes(state));
  const seconds = useSelector(state => gameSelectors.getTime(state));
  const [state, setState] = useState(stateCube.EMPTY);
  const [backgroundColor, setBgColor] = useState('transparent');
  const [size, setSize] = useState(0);
  useEffect(() => {
    if (state === stateCube.CLICKABLE) {
      setBgColor(colors[Math.floor(Math.random() * 15)]);
      setSize(Math.floor(Math.random() * 2));
    } else {
      setBgColor('transparent');
      setSize(0);
    }
  }, [state]);

  useEffect(() => {
    if (indexes.includes(cell) && seconds !== -1) {
      setState(stateCube.CLICKABLE);
    } else {
      setState(stateCube.EMPTY);
    }
  }, [seconds, indexes]);

  const handleClick = e => {
    const cubeIndex = Number(e.target.dataset.index);
    if (!indexes.includes(cubeIndex)) {
      return;
    }
    let amount = 1;
    if (size) {
      amount = 5;
    }
    if (start) {
      switch (backgroundColor) {
        case '#FF0000':
          dispatch(gameSlice.points.actions.addPoint(amount + 5));
          break;
        case '#00CC00':
          dispatch(gameSlice.points.actions.addPoint(amount + 3));
          break;
        default:
          dispatch(gameSlice.points.actions.addPoint(amount));
      }

      dispatch(gameSlice.cubes.actions.removeCube(cubeIndex));
      const count = Math.floor(Math.random() * 3);
      dispatch(gameSlice.cubes.actions.initCubes(count));
    }
  };

  return (
    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
      <div
        data-index={cell}
        style={{
          backgroundColor,
          width: size ? '50%' : '100%',
          height: size ? '50%' : '100%',
        }}
        onClick={handleClick}
      ></div>
    </div>
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
