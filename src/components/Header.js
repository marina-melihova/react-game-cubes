import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameSlice } from '../redux/game';
import FinalForm from './FinalForm';
import Modal from './Modal';

const initCountCubes = 75;

const Header = () => {
  const start = useSelector(state => gameSelectors.getGamePhase(state));
  const points = useSelector(state => gameSelectors.getPoints(state));
  const indexes = useSelector(state => gameSelectors.getCubes(state));
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  const closeForm = () => {
    setIsShowModal(prev => !prev);
  };
  const onReset = () => {
    setSecondsLeft(60);
    if (start) {
      dispatch(gameSlice.phase.actions.toggleStart());
    }
    dispatch(gameSlice.points.actions.resetGame());
    dispatch(gameSlice.cubes.actions.resetGame());
    dispatch(gameSlice.cubes.actions.initCubes(initCountCubes));
  };
  const onStart = () => {
    if (!indexes.length) {
      dispatch(gameSlice.cubes.actions.initCubes(initCountCubes));
    }
    dispatch(gameSlice.phase.actions.toggleStart());
  };

  const [secondsLeft, setSecondsLeft] = useState(60);
  useEffect(() => {
    let token;
    if (start) {
      token = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }

    if (secondsLeft === 0 && start) {
      dispatch(gameSlice.phase.actions.toggleStart());
      setIsShowModal(true);
    }
    return () => {
      clearTimeout(token);
    };
  }, [start, secondsLeft]);

  return (
    <>
      <header className="jumbotron jumbotron-fluid py-3">
        <div className="row justify-content-between px-3 px-md-0 ">
          <div className="col-12 col-md-8 pl-md-5">
            <h1 className="display-6">Remove cubes</h1>
            <div className="d-flex align-items-center justify-content-between text-center">
              <div>
                <button
                  type="button"
                  className="btn btn-primary mr-2 mr-md-3"
                  onClick={onStart}
                >
                  {start ? 'PAUSE' : 'START'}
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onReset}
                >
                  NEW GAME
                </button>
              </div>
              <div className="d-inline-flex flex-column">
                Points
                <span className="border border-secondary rounded-lg bg-white p-2">
                  {points}
                </span>
              </div>
              <div className="d-inline-flex flex-column">
                Time left
                <span className="border border-secondary rounded-lg bg-white p-2">
                  {secondsLeft === 60 ? 1 : 0} :{' '}
                  {secondsLeft === 60
                    ? '00'
                    : String(secondsLeft).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          <div className="d-none d-md-block col-md-3">Rules</div>
        </div>
      </header>
      {isShowModal && (
        <Modal closeModal={closeForm}>
          <FinalForm closeModal={closeForm} />
        </Modal>
      )}
    </>
  );
};

export default Header;
