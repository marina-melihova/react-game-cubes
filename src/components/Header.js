import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelectors, gameSlice } from '../redux/game';
import FinalForm from './FinalForm';
import Modal from './Modal';

const initCountCubes = 35;

const Header = () => {
  const start = useSelector(gameSelectors.getGamePhase);
  const points = useSelector(gameSelectors.getPoints);
  const indexes = useSelector(gameSelectors.getCubes);
  const seconds = useSelector(gameSelectors.getTime);
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  const closeForm = () => {
    setIsShowModal(prev => !prev);
  };

  const onReset = () => {
    dispatch(gameSlice.seconds.actions.resetGame());
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
    if (seconds === -1) {
      dispatch(gameSlice.seconds.actions.startTimer());
    }
    dispatch(gameSlice.phase.actions.toggleStart());
  };

  useEffect(() => {
    let timer;
    if (seconds > 0 && start) {
      timer = setTimeout(() => {
        dispatch(gameSlice.seconds.actions.updateTime());
      }, 1000);
    }
    if (!seconds && start) {
      dispatch(gameSlice.phase.actions.toggleStart());
      setIsShowModal(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [start, seconds, dispatch]);

  return (
    <>
      <header className="jumbotron jumbotron-fluid px-5 py-3">
        <div className="row justify-content-between">
          <div className="col-12 col-md-8">
            <h1 className="display-6 mb-0">Remove cubes</h1>
            <div className="d-flex align-items-center justify-content-between text-center">
              <div>
                <button
                  type="button"
                  className="btn btn-primary mr-2 mr-md-3"
                  onClick={onStart}
                  disabled={!seconds}
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
                <span className="mb-2">Points</span>
                <span className="border border-secondary rounded-lg bg-white p-2">
                  {points}
                </span>
              </div>
              <div className="d-inline-flex flex-column">
                <span className="mb-2">Time left</span>
                <span className="border border-secondary rounded-lg bg-white p-2">
                  {seconds === 60 || seconds === -1 ? 1 : 0} :{' '}
                  {seconds === 60 || seconds === -1
                    ? '00'
                    : String(seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-3 pt-2 pt-lg-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </div>
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
